import React, { Component } from 'react'
import DetailUser from '../components/DetailUser'
import '../assets/css/detail.css'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduk: props.dataProduk,
            params: props.params,
            produk: null,
            pembelian: {}

        }
    }
    componentWillMount() {
        this.state.dataProduk.forEach(element => {
            if (element.id == this.state.params) {
                this.setState({ produk: element })
            }
        });
    }
    render() {
        console.log(this.state.produk);
        return (
            <div className="container-fluid detail">
                <DetailUser produk={this.state.produk} />
            </div>
        )

    }
}
export default Detail