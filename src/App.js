import React, { Component } from 'react'
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
          <Route path='/' exact component={Home} />
          <Route path='/detail' exact component={Detail} />
          <Route path='/list' exact component={List} />
          <Route path='/payment' exact component={Payment} />

        </div>
      </BrowserRouter>
    )
  }

}
export default App