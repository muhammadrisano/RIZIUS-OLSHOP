import React, { Component } from 'react'
import DetailUser from '../components/DetailUser'
import '../assets/css/detail.css'
class Detail extends Component {


    render() {
        return (
            <div className="container-fluid detail">
                <DetailUser />
                {/* <DetailFlexi /> */}
            </div>
        )

    }
}
export default Detail