import React, { Component } from 'react';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import List from './screens/List'
import Payment from './screens/Payment'
import Navbar from './components/Navbar'
import CategoryList from './screens/CategoryList';
// import produk from './database/untukmu';
import product from './database/product';
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
          <FooterPage />
        </div>
      </BrowserRouter>
    )
  }
}

export default App