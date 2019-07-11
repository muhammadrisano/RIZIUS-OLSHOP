import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
class Home extends Component {

    render() {
        return (
            <div style={{ paddingTop: 105 }}>
                <Header />
                <Body />
            </div>
        )
    }
}
export default Home