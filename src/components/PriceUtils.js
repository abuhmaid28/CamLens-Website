export const calculatePrice = (cameraTitle, categoryTitle, cameraPrice) => {
  if (cameraTitle.includes("Canon")) {
    return (cameraPrice - cameraPrice * 0.15).toFixed(2);
  } else if (cameraTitle.includes("Sony") || categoryTitle === "dslr") {
    return (cameraPrice - cameraPrice * 0.1).toFixed(2);
  } else if (
    categoryTitle === "mirrorless" ||
    categoryTitle === "professional"
  ) {
    return (cameraPrice - cameraPrice * 0.05).toFixed(2);
  } else {
    return cameraPrice;
  }
};
