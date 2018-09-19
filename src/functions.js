let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];

function getFilter (urlArray) {
  let newUrl = [];
  if (urlArray.length > 1) {
        urlArray.map((url, i) => {
      if (i === 0) {
        return newUrl.push(url.replace("&", "?"));
      } else {
        return newUrl.push(url.replace("?", "&"))
      }
    })
  } else {
    urlArray.map((path, i) => {
      if (i === 0) {
        return newUrl.push(path.replace('&', '?'));
      } else {
        return newUrl.push(path.replace('?', '&'))
      }
    })
  }
  return newUrl.join("");
}
module.exports.getFilter = getFilter;

function addToCart(product) {
  productsInCart.push(product);
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
};
module.exports.addToCart = addToCart;
