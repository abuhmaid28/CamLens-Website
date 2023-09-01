export const calculatePrice = (cameraTitle, categoryTitle, cameraPrice) => {
  let discount = 0;

  // Check if the camera title contains specific keywords
  if (cameraTitle.includes("Canon")) {
    discount = 0.15;
  } else if (cameraTitle.includes("Sony") || categoryTitle === "dslr") {
    discount = 0.1;
  } else if (
    categoryTitle === "mirrorless" ||
    categoryTitle === "professional"
  ) {
    discount = 0.05;
  }

  // Calculate the discounted price and round it to two decimal places
  const discountedPrice = (cameraPrice * (1 - discount)).toFixed(2);

  return discountedPrice;
};
