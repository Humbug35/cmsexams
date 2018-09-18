import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import { addToCart } from './functions';

class ShowProducts extends Component {
    render() {
        const product = this.props.product;
        let imgURL = `http://localhost:1337${product.Image.url}`;
        return (
            <fieldset>
              <section>
                <article>
                  {product.Name}
                </article>
                <img src={imgURL} alt="Bild"/>
                <p>Pris: {product.Price} :-</p>
                <p>Antal i lager: {product.StockQuantity}</p>
                <p>{product.Desc}</p>
                <p>Kategori: {product.Category}</p>
                <AddToCartButton addToCart={addToCart.bind(this, product)}/>
                <NavLink to={"/product/"+product.id}>Mer info</NavLink>
              </section>
            </fieldset>
        )
    }
}
export default ShowProducts;
