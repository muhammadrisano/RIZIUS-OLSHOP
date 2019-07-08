import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact Component={Home} />
          <Route path='/detail' exact Component={Detail} />
          <Router path='/list' exact Component={List} />
        </div>
      </BrowserRouter>
    )
  }

}
export default App