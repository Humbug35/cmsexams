const getProducts = (sortUrl) => {
  if (!sortUrl) {
    sortUrl = "";
  }
  return fetch(`http://localhost:1337/product${sortUrl}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(product => product.json())
  .then(product => product)
};
export default getProducts;
