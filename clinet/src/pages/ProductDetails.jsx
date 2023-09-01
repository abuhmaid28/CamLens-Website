import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
import { calculatePrice } from "../components/PriceUtils"; // Update the path to calculatePrice

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="container mx-auto">Product not found</div>;
  }

  const imageUrl =
    data[0].attributes?.image?.data?.attributes?.url || "placeholder_image_url";

  const categoryTitle =
    data[0].attributes?.categories?.data[0]?.attributes?.title ||
    "Unknown Category";

  const cameraTitle = data[0].attributes.title;
  const cameraPrice = data[0].attributes.price;
  const discountedPrice = calculatePrice(
    cameraTitle,
    categoryTitle,
    cameraPrice
  );

  const getDiscountText = () => {
    if (cameraTitle.includes("Canon")) {
      return "(15% off)";
    } else if (cameraTitle.includes("Sony") || categoryTitle === "dslr") {
      return "(10% off)";
    } else if (
      categoryTitle === "mirrorless" ||
      categoryTitle === "professional"
    ) {
      return "(5% off)";
    } else {
      return "";
    }
  };

  return (
    <div className="mb-16 pt-44 lg:pt-8 xl:pt-0 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`http://localhost:1337${imageUrl}`}
              alt="camera_Image"
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-8 sm:p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className=" uppercase text-accent text-base sm:text-lg font-medium mb-2">
              {categoryTitle} cameras
            </div>
            <h2 className="capitalize text-xl sm:text-3xl mb-4">
              {cameraTitle}
            </h2>
            <p className="mb-12 text-sm">{data[0].attributes.description}</p>
            <div className="text-center sm:text-left flex items-center justify-evenly sm:justify-normal gap-x-4">
              <div className="sm:text-3xl t text-2xl text-accent font-semibold">
                ${discountedPrice}
                <span className="sm:text-2xl text-sm sm:ml-1 block sm:inline">
                  {getDiscountText()}
                </span>
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent min-w-fit text-xs px-2 sm:px-10 sm:text-sm "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
