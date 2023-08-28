const Stripe = require("stripe");
const stripeKey = process.env.STRIPE_KEY;

if (!stripeKey) {
  throw new Error("Stripe key is missing");
}

const stripeInstance = new Stripe(stripeKey, {
  apiVersion: "2023-08-16", // Replace with the desired API version
});

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { cart } = ctx.request.body;

    if (!cart) {
      ctx.response.status = 400;
      return { error: "Cart not found in request body" };
    }

    const lineItems = await Promise.all(
      cart.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        if (!item) {
          ctx.response.status = 400;
          return { error: `Product with ID ${product.id} not found` };
        }

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.amount,
        };
      })
    );

    try {
      const session = await stripeInstance.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order.order").create({
        data: {
          products: cart,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      console.error("Error processing payment:", error);
      ctx.response.status = 500;
      return { error: "An error occurred while processing your request" };
    }
  },
}));
