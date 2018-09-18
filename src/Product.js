import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ShowReviews from './ShowReviews';
import AddToCartButton from './AddToCartButton';
import { addToCart } from "./functions";


class ProductPage extends Component {

  constructor() {
    super()
    this.state = {
      product: null
    }
  }




  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("http://localhost:1337/product/"+id)
    .then((res) => res.json())
    .then((product) => {
      this.setState({
        product: product
      })
    })
  };
  render() {
    const product = this.state.product;
    if (!product) {
      return null;
    }
    let imgUrl = `http://localhost:1337${product.Image.url}`;
    return (
      <div>
        <NavLink to={"/"}>Start</NavLink>
        <br />
        <NavLink to={"/checkout"}>Till Varukorgen</NavLink>
        <p>{product.Name}</p>
        <img src={imgUrl} alt="Bild"/>
        <p>{product.Desc}</p>
        <p>Pris: {product.Price} :-</p>
        <p>Antal i lager: {product.StockQuantity} st</p>
        <AddToCartButton addToCart={addToCart.bind(this, product)}/>
        <div>
          <ShowReviews id={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}
export default ProductPage;
