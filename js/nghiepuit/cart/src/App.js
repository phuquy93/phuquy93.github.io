import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import Massage from './components/Massage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main id="mainContainer">
              <div className="container">
                  <section className="section">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                      <ProductContainer />
                  </section>
                  <Massage />
                  <section className="section">
                      <CartContainer />
                  </section>
              </div>
          </main>
  
          <Footer />
      </div>
    );
  }
}

export default App;
