import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import { addToCart } from './functions';

class ShowProducts extends Component {
    render() {
        const product = this.props.product;
        let imgURL = `http://localhost:1337${product.Image.url}`;
        return (
              <section className="product-card">
                <div className="product-header-info">
                  <div className="product-card-header">
                    <article>
                      <h3>{product.Name}</h3>
                    </article>
                    <img src={imgURL} alt="Bild" className="product-card-image"/>
                  </div>
                  <div className="product-card-info">
                    <p>{product.Desc}</p>
                    <p>Antal i lager: {product.StockQuantity}</p>
                    <p>Pris: {product.Price} :-</p>
                    <p>Kategori: {product.Category}</p>
                  </div>
                </div>
                <div className="product-card-button-link">
                  <div className="product-card-links">
                    <AddToCartButton addToCart={addToCart.bind(this, product)}/>
                    <NavLink to={"/product/"+product.id}><button className="product-more-info-button">Mer info</button></NavLink>
                  </div>
                </div>
              </section>
        )
    }
}
export default ShowProducts;
