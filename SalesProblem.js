function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let highestProfit = Number.NEGATIVE_INFINITY;
  let topProduct = "";

  for (const product of productProfitArray) {
    if (product.profit > highestProfit) {
      highestProfit = product.profit;
      topProduct = product.name;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let lowestProfit = Number.POSITIVE_INFINITY;
  let bottomProduct = "";

  for (const product of productProfitArray) {
    if (product.profit < lowestProfit) {
      lowestProfit = product.profit;
      bottomProduct = product.name;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Number.POSITIVE_INFINITY;
  let zeroProfitProduct = "";

  for (const product of productProfitArray) {
    const profit = Math.abs(product.profit);
    if (profit < closestProfit) {
      closestProfit = profit;
      zeroProfitProduct = product.name;
    }
    // If two products have profits equally close to 0, consider the positive profit
    else if (profit === closestProfit && product.profit > 0) {
      closestProfit = profit;
      zeroProfitProduct = product.name;
    }
  }

  return zeroProfitProduct;
}

// Example usage with sample data
const productProfitArray = [
  { name: "Product A", profit: -100 },
  { name: "Product B", profit: 200 },
  { name: "Product C", profit: 50 },
  { name: "Product D", profit: -75 },
];

console.log("Top Product: ", topProduct(productProfitArray));
console.log("Bottom Product: ", bottomProduct(productProfitArray));
console.log("Zero Profit Product: ", zeroProfitProduct(productProfitArray));
