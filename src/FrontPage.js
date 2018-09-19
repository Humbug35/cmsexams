import React, { Component } from 'react';
import GetProducts from './getProducts';
import ShowProducts from './showProducts';
import Filter from './Filter';
import { getFilter } from './functions';
import { NavLink } from 'react-router-dom';



class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  setUrl(filterArray) {
    const sortURL = getFilter(filterArray);
    this.getProducts(sortURL);
  }

  getProducts(sortUrl) {
    GetProducts(sortUrl)
    .then(product => {
      this.setState({
        products: product,
      })
    })
  }

  componentDidMount() {
    this.getProducts()
  }
  checkedBox(filter) {
    this.setUrl(filter)
  }
  render() {
    const myProduct = this.state.products.map(product => {
      if(product.StockQuantity === 0) {
        return null
      } else {
        return <ShowProducts key={product.id} product={product} />
      }
    })
    return (
      <div className="App">
        <NavLink to={"/checkout"}>Varukorg</NavLink>
        <div>
          <Filter checkBoxes={this.checkedBox.bind(this)}/>
        </div>
        {myProduct}
      </div>
    );
  }
}
export default FrontPage;
