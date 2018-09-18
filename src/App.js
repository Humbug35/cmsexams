import React, { Component } from 'react';
import MainRouter from './MainRouter';
import FrontPage from './FrontPage';



class App extends Component {
  render() {
    return (
      <MainRouter>
        <FrontPage />
      </MainRouter>
    )
  }
}
export default App;
