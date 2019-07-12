import React, { Component } from 'react';
import { Container } from 'reactstrap';
import "../assets/css/categoryList.css"
import sellerPick from '../database/SellerPicks';
import '../assets/css/home.css'
import slide1 from '../assets/images/header/be74b5d1060e414eb8c8891bb14b4944-1360-480.jpg_desktop.jpg'
import slide2 from '../assets/images/header/1c7108bac9234ca8adc471d9e9842177-1360-480.jpg_desktop.jpg'
import slide3 from '../assets/images/header/2ee1241442d647569cf882827b9ceff7-1360-480.jpg_desktop.jpg'
import slide4 from '../assets/images/header/TB1Xgv5Xlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp'
import { Link } from 'react-router-dom';
import FooterPageDua from '../components/FooterPageDua';


const paragraf1 = {
    textAlign: "justify",
}
const paragraf2 = {
    textAlign: "justify",
}
const cardA = {
    marginTop: "15px",

}

function text(text) {
    if (text.length > 25) {
        let textSplit = text.substr(0, 45)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}

const Carousel = ({ category, subcategory }) => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Beranda</a></li>
                    <li class="breadcrumb-item"><a href="/">{category}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{subcategory}</li>
                </ol>
            </nav>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="slider1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="slider2" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="slider3" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide4} className="d-block w-100" alt="slider3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

const SetStar = ({ star, ulasan }) => {
    console.log(star)
    if (star == 1) {
        return (
            <h6>
                <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <i class="far fa-star"></i><i class="far fa-star"></i> <span>({ulasan})</span>
            </h6>
        )
    } else if (star == 2) {
        return (
            <h6>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <span>({ulasan})</span>
            </h6>
        )
    } else if (star == 3) {
        return (
            <h6>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <span>({ulasan})</span>
            </h6>
        )
    } else if (star == 4) {
        return (
            <h6>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> <span>({ulasan})</span>
            </h6>
        )
    } else if (star == 5) {
        return (
            <h6><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <span>({ulasan})</span></h6>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCategoriParams: props.params.category,
            idSubcategoriParams: props.params.subcategory,
            dataProduk: props.dataProduk,
        }
    }
    render() {
        let pencarian = 0
        const tampilProduk = this.state.dataProduk.map((produk, index) => {
            if (this.state.idSubcategoriParams) {
                if (produk.subcategory == this.state.idSubcategoriParams) {
                    pencarian = pencarian + 1
                    return (
                        < div key={index} className="col-3" >
                            <Link to={'/detail/' + produk.id} style={{ textDecoration: 'none' }}>
                                <div class="card">
                                    <div className="card-head">
                                        <img src={produk.url[0]} class="card-img-top" alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{text(produk.title)}</h5>
                                        <h4>Rp {produk.price}</h4>
                                        <SetStar star={produk.star} ulasan={produk.ulasan} />
                                        <div className="card-kota">{produk.city}</div>
                                    </div>
                                </div>
                            </Link>
                        </div >
                    )
                }
            } else if (produk.category == this.state.idCategoriParams) {
                pencarian = pencarian + 1
                return (
                    <div key={index} className="col-3">
                        <Link to={'/detail/' + produk.id} style={{ textDecoration: 'none' }}>
                            <div class="card">
                                <div className="card-head">
                                    <img src={produk.url[0]} class="card-img-top" alt="" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{text(produk.title)}</h5>
                                    <h4>Rp {produk.price}</h4>
                                    <SetStar star={produk.star} ulasan={produk.ulasan} />
                                    <div className="card-kota">{produk.city}</div>
                                </div>
                            </div>
                        </Link>
                    </div >
                )
            }
        })
        return (
            <div className="style">
                <Container>
                    <Carousel category={this.state.idCategoriParams} subcategory={this.state.idSubcategoriParams} />
                    <div >
                        <div className="row card-img">
                            <div className="col-2">
                                <div className="card" style={cardA} >
                                    <img src="https://id-live-03.slatic.net/original/029ef88856e554009ef014f6109a8c1d.jpg" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="card" style={cardA}>
                                    <img src="https://id-live-03.slatic.net/original/65fa75cabea090540e56620e95f73146.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="card" style={cardA}>
                                    <img src="https://id-live-03.slatic.net/original/795230a0754e8b7fdcbb63b5ca4c291c.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="card" style={cardA}>
                                    <img src="https://id-live-02.slatic.net/original/baaac2d1b8e29ab9d9b7a2d3d7d50504.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="card" style={cardA}>
                                    <img src="https://id-live-03.slatic.net/original/95725dd1af4a39b4ec51dc340fdb8a5c.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="card" style={cardA}>
                                    <img src="https://id-live-01.slatic.net/original/349fda9f47121ca7555d7fb7d18f16c4.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="navbar navbar-light bg-light">
                            <h5 class="navbar-brand"><b>{this.state.idCategoriParams}</b></h5>
                            <p>{pencarian} barang ditemukan dalam {this.state.idCategoriParams}</p>
                            <form class="form-inline">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="" type="">Urut Berdasarkan: </span>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">h
                                    <option selected>Popularitas</option>
                                        <option value="1">Harga Rendah ke Tinggi</option>
                                        <option value="2">Harga Tinggi ke Rendah</option>
                                        <option value="3">Harga Cuma-Cuma</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="borderList untukmu">
                            <div className="row">
                                {tampilProduk}
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span></a>
                                </li>
                            </ul>
                        </nav>
                        <div className="borderList untukmu">
                            <h6>Seller Picks</h6>
                            <div className="row">
                                {sellerPick.map((item, index) =>
                                    <div className="col-3">
                                        <div class="card">
                                            <div className="card-head">
                                                <img src={item.url} class="card-img-top" />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">{text(item.title)}</h5>
                                                {/* <p class="card-text"> of the card's content.</p> */}
                                                <h4>Rp {item.price}</h4>
                                                <h6><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><span> {item.star}</span></h6>
                                                <div className="card-kota">{item.city}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="ant-col-24">
                            <div class="hpTerbaik">
                                <h6>Handphone Terbaik</h6>
                                <p style={paragraf1} data-spm-anchor-id="a2o4j.searchlistcategory.0.i0.60bc9fe3eaNQRr">Komunikasi menjadi hal yang sangat penting dan dibutuhkan oleh setiap orang. Dibantu dengan kemajuan teknologi, komunikasi akan semakin mudah terjalin. Jika dulu kita bisa menjalin komunikasi menggunakan telepon atau telepon rumah. Saat ini semakin dipermudah dengan adanya handphone atau banyak juga yang menyebutnya hape. Dengan meningkatnya peminat dari hape ini bermunculan toko handphone. Dengan adanya kemajuan teknologi lagi-lagi kita dipermudah untuk membeli sebuah handphone hp yaitu bermunculannya situs hp. Dengan adanya situshp ini anda tidak perlu lagi keluar rumah untuk mendapatkan hp bagus, murah serta canggih.</p>
                                <p>Jenis-Jenis Handphone</p>
                                <p>Saat ini bermunculan berbagai macam jenis handphone. Banyak sekali jenis handphone yang dijual di pasaran mulai dari jenis sim card yang digunakan, brandnya, hingga sistem operasinya. Jika dilihat dari sistem operasi ada hp android dan hp yang menggunakan sistem operasi iOS. Untuk handphone yang menggunakan sistem operasi iOS hanya khusus dimiliki oleh handphone yang diproduksi oleh Apple. Jika dilihat dari sim card yang digunakan jenis handphone dapat dibedakan menjadi hp CDMA dan hp GSM.</p>
                                <p>Handphone Android Murah</p>
                                <p>HP berbasis Android belakangan sangat digemari berbagai kalangan. Berkat fitur Google Play Store pada tiap hp android, Anda dapat memilih ribuan lebih aplikasi seperti game, peningkat produktivitas dan sebagainya. Lazada menyediakan berbagai merek hp android seperti android <a href="https://www.lazada.co.id/beli-handphone/samsung/">Samsung Galaxy</a>, Sony Xperia, Mito, HTC dan banyak lagi hp cina murah dan lokal lainnya.</p>
                                <p>Harga Ponsel</p>
                                <p>Lazada menyediakan berbagai macam hape android murah. Mulai dari hp cina, hp dual sim murah, hp samsung android termurah, hingga hp samsung paling murah. Dengan hanya mengunjungi Lazada.co.id saja anda sudah dapat menemukan info harga hp terlengkap. Lazada jual smartphone dan handphone murah. Dengan membeli handphone di lazada anda juga bisa kredit handphone secara online. Karena lazada menawarkan sistem pembayaran dengan cara kredit dengan cicilan 0%.</p>
                                <p>Lazada: Situs Hp Nomor 1 di Indonesia</p>
                                <p style={paragraf2}>Di lazada anda dapat menemukan berbagai jenis handphone dengan harga yang beraneka ragam. Mulai dari harga hp dibawah 1 juta, harga hp dibawah 500 ribu, harga hp murah berkualitas, harga hp samsung android murah, harga hp samsung android termurah, harga ponsel samsung, harga ponsel terbaru, dan harga <a href="https://www.lazada.co.id/beli-smartphone/">smartphone</a> murah. Banyak keuntungan yang anda dapatkan dengan berbelanja di situs hp Lazada. Seperti jenis sistem pembayaran yang beraneka ragam mulai dari kredit hp dengan cicilan 0%, COD, serta voucher dan <a href="https://www.lazada.co.id/special-promotion/">diskon setiap hari</a>.</p></div></div>
                    </div >
                    <FooterPageDua />
                </Container >
            </div >
        )
    }
}

export default CategoryList