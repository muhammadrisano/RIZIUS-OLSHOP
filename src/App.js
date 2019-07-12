import React, { Component } from 'react';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import List from './screens/List'
import Payment from './components/payment'
import Navbar from './components/Navbar'
import CategoryList from './screens/CategoryList';
import BuatPesanan from './components/buatPesanan'
import Cart from './components/Cart'
import product from './database/product'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduk: product,
      cart: []
    }
  }
  addToCart = (data) =>{
    this.state.cart.push(data)
    console.log(this.state.cart)
  }
  changeJumlah = (index, data) => {
    this.setState(this.state.cart[index] = data)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:idproduk' exact render={(props) => <Detail dataProduk={this.state.dataProduk} addToCart={this.addToCart} params={props.match.params.idproduk} />} />
          <Route path='/list' exact component={List} />


          <Route path='/categoryList/:category' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />
          <Route path='/categoryList/:category/:subcategory' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />

          <Route path='/payment' exact render={()=> <Payment cart={this.state.cart}/>} />
          <Route path='/cart' exact render={()=> <Cart cart={this.state.cart} changeJumlah={this.changeJumlah}/>} />
          <Route path='/buatpesanan' exact render={()=> <BuatPesanan cart={this.state.cart}/>} />
          <FooterPage />
        </div>
      </BrowserRouter>
    )
  }
}

export default App