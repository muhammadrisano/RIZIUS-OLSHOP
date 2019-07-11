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
            pembelian: {},
            foto: null
        }
    }
    componentWillMount() {
        this.state.dataProduk.forEach(element => {
            if (element.id == this.state.params) {
                this.setState({
                    produk: element,
                    foto: element.url[0]
                })
            }
        });
    }

    setFoto = (fotoBaru) => {
        this.setState({
            foto: fotoBaru
        })
    }
    render() {
        console.log(this.state.produk);
        return (
            <div className="container-fluid detail">
                <DetailUser foto={this.state.foto} produk={this.state.produk} setFoto={this.setFoto} />
            </div>
        )

    }
}
export default Detail