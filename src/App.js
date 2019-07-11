import React, { Component } from 'react';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import List from './screens/List'
import Payment from './components/payment'
import Navbar from './components/Navbar'

import CategoryList from './screens/CategoryList';

import product from './database/product';

import CategoryList from './components/CategoryList';
import BuatPesanan from './components/buatPesanan'
import Cart from './components/Cart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduk: product,
      cart: null
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:idproduk' exact render={(props) => <Detail dataProduk={this.state.dataProduk} params={props.match.params.idproduk} />} />
          <Route path='/list' exact component={List} />
          {/* <Route path='/categoryList/:category/' exact component={CategoryList} /> */}
          <Route path='/categoryList/:category' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />
          <Route path='/categoryList/:category/:subcategory' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />
          {/* <Route path='/categoryList/:category/:subcategory' exact component={CategoryList} /> */}
          <Route path='/payment' exact component={Payment} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/buatpesanan' exact component={BuatPesanan} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App