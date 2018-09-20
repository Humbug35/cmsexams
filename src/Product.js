import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ShowReviews from './ShowReviews';
import AddToCartButton from './AddToCartButton';
import { addToCart } from "./functions";
import Header from './Header';


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
        <Header />
        <div className="navlink-div single-product-nav-div">
          <NavLink to={"/"}>Start</NavLink>
          <NavLink to={"/checkout"}>Till Varukorgen</NavLink>
        </div>
          <div className="single-product-specific">
            <div className="single-product-header">
              <h3>{product.Name}</h3>
              <img src={imgUrl} alt="Bild"/>
            </div>
            <div className="single-product-info">
              <p>{product.Desc}</p>
              <p>Antal i lager: {product.StockQuantity} st</p>
              <p>Kategori: {product.Category}</p>
            </div>
            <div className="single-product-button">
              <p>Pris: {product.Price} :-</p>
              <AddToCartButton addToCart={addToCart.bind(this, product)}/>
            </div>
          </div>
        <div>
          <ShowReviews id={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}
export default ProductPage;
