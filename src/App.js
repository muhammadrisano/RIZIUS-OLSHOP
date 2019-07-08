import React, { Component } from 'react';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import List from './screens/List'
import Payment from './screens/Payment'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact Component={Home} />
          <Route path='/detail' exact Component={Detail} />
          <Route path='/list' exact Component={List} />
          <Route path='/payment' exact Component={Payment} />
          <FooterPage />
        </div>
      </BrowserRouter>
    )
  }
}

export default App