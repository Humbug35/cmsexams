import React, { Component } from 'react';
import Logga from './images/BraBild.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logga} className="header-img" />
        <h1>The Home Of Sulkys</h1>
      </div>
    )
  }
}
export default Header;
