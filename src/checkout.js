import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      personData: {
        Client: '',
        Address: '',
        Mail: '',

      }
    }
  }
  componentDidMount() {
    this.getLocal();
  }
  getLocal() {
      let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];
      this.setState({
        cartProducts: productsInCart
      })
  }
  getPersonData(e) {
    e.preventDefault();
    this.setState({
      personData: {
        FullName: this.refs.client.value,
        Address: this.refs.address.value,
        Mail: this.refs.mail.value
      }
    })
  }
  sendOrder(e) {
    let totalPrice = 0;
    let productsToOrder = this.state.cartProducts.map(product => {
      totalPrice = totalPrice + product.Price
      return {
        ProductName: product.Name,
        ProductPrice: `${product.Price} SEK`,
        ProductId: product.id,
      }
    })
    e.preventDefault();
    fetch('http://localhost:1337/order', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({PersonData: this.state.personData, OrderProducts: productsToOrder, TotalPrice: totalPrice})
  })
  this.refs.checkOutForm.reset();
  localStorage.clear();
  this.setState({
    cartProducts: []
  })
}
  render() {
    if(this.state.cartProducts.length > 0) {
      let cart = getUnique(this.state.cartProducts)
      .map(item => {
        return <div key={item.id} className="cart-products">
                      <img src={`http://localhost:1337${item.Image.url}`} alt="Bild" />
                      <div className="checkout-product-name-price-amount">
                        <p>{item.Name}</p>
                        <p>{item.Price} :-</p>
                        <p>{item.amount} st</p>
                      </div>
                   </div>
      })

      function getUnique(li) {
        let hash = {}
        li.forEach((val) => {
          const id = val.id;
          if (hash[id]) {
            hash[id].amount = hash[id].amount + 1
          } else {
            val.amount = 1
            hash[id] = val;
          }
        })
        return Object.values(hash)
      }
      let price = 0;
      this.state.cartProducts.map(item => {
        return price = item.Price + price;
      })
      return (
        <div>
          <NavLink to={"/"}>Start</NavLink>
          <h3>CheckOut</h3>
          <div className="checkout-title-product">
            <p>Produkt</p>
            <p>Pris</p>
            <p>Antal</p>
          </div>
          <p>{cart}</p>
          <p>TotalPris: {price} <strong>SEK</strong></p>
          <form onSubmit={this.sendOrder.bind(this)} ref="checkOutForm">
            Namn: <input type="text" required onChange={this.getPersonData.bind(this)} ref="client" />
            <br />
            Adress: <input type="text" required onChange={this.getPersonData.bind(this)} ref="address"/>
            <br />
            Mailadress: <input type="mail" required onChange={this.getPersonData.bind(this)} ref="mail"/>
            <button type="submit">Skicka</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <NavLink to={"/"}>Start</NavLink>
          <h3>CheckOut</h3>
          <p>Här var det tomt, men klicka <NavLink to={"/"}>HÄR</NavLink> så du kan shoppa!</p>
        </div>
      )
    }

  }
}
export default CheckOut;
