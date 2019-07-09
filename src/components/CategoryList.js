import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardBody} from 'reactstrap';
import categoryList from "../database/categoryList";
import "../index.css"
import sellerPick from '../database/SellerPicks';

const paragraf1 = {
    textAlign: "justify",
}
const paragraf2 = {
    textAlign: "justify",
}

function text(text) {
    if (text.length > 25) {
      let textSplit = text.substr(0, 30)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
}



class CategoryList extends Component {
    render() {
        return(
            <div className="style">
            <div data-spm="breadcrumb" id="J_breadcrumb_list" class="breadcrumb_list breadcrumb_custom_cls">
                <ul class="breadcrumb" id="J_breadcrumb">
                    <li class="breadcrumb_item">
                        <span class="breadcrumb_item_text">
                            <a title="Beranda" href="/" class="breadcrumb_item_anchor">
                                <span>Beranda</span>
                            </a>
                            <div class="breadcrumb_right_arrow"></div>
                        </span>
                    </li>
                <li class="breadcrumb_item">
                <span class="breadcrumb_item_text">
                  <a title="Handphone &amp; Tablet" href="/beli-handphone-tablet/" class="breadcrumb_item_anchor">
                    <span>Handphone &amp; Tablet</span>
                  </a>
                <div class="breadcrumb_right_arrow"></div>
            </span>
                 </li>
            <li class="breadcrumb_item">
                <span class="breadcrumb_item_text">
                    <span class="breadcrumb_item_anchor breadcrumb_item_anchor_last">Handphone</span>
                </span>
            </li>
        </ul>
        </div>
        
            <Container>
                <Row>
                  {categoryList.map((item, index) => 
                  <Col md={3}>
                    <div className="list">
                        <Card >
                            <div>
                                <a href={'/' + index}>
                                    <CardImg img
                                        className="img" height="300px"
                                        src={item.url}
                                        alt="image"/>
                                    <CardBody className="cardbody">
                                        <p className="font">{text(item.title)}</p>
                                        <p className="">{item.price}</p>
                                        <p className="">{item.star}</p>
                                        <p className="">{item.city}</p>
                                    </CardBody>
                                </a>
                            </div>
                        </Card>
                    </div>    
                  </Col>
               )} 
                </Row> 
               <h6>Seller Picks</h6>
                <Row>
                    {sellerPick.map((item, index) => 
                       <Col md={3}>
                       <div className="list">
                           <Card >
                               <div>
                                   <a href={'/' + index}>
                                       <CardImg img
                                           className="img" height="300px"
                                           src={item.url}
                                           alt="image"/>
                                       <CardBody className="cardbody">
                                           <p className="font">{text(item.title)}</p>
                                           <p className="">{item.price}</p>
                                           <p className="">{item.star}</p>
                                           <p className="">{item.city}</p>
                                       </CardBody>
                                   </a>
                               </div>
                           </Card>
                       </div>    
                     </Col> 
                        )}
                </Row>
              
            
            <div class="ant-col-24"><div class=""><h2>Handphone Terbaik</h2>
            <p style={paragraf1} data-spm-anchor-id="a2o4j.searchlistcategory.0.i0.60bc9fe3eaNQRr">Komunikasi menjadi hal yang sangat penting dan dibutuhkan oleh setiap orang. Dibantu dengan kemajuan teknologi, komunikasi akan semakin mudah terjalin. Jika dulu kita bisa menjalin komunikasi menggunakan telepon atau telepon rumah. Saat ini semakin dipermudah dengan adanya handphone atau banyak juga yang menyebutnya hape. Dengan meningkatnya peminat dari hape ini bermunculan toko handphone. Dengan adanya kemajuan teknologi lagi-lagi kita dipermudah untuk membeli sebuah handphone hp yaitu bermunculannya situs hp. Dengan adanya situshp ini anda tidak perlu lagi keluar rumah untuk mendapatkan hp bagus, murah serta canggih.</p>

            <ul class="seo-list clearfix">
            <li>
            <h3>Jenis-Jenis Handphone</h3>

            <p>Saat ini bermunculan berbagai macam jenis handphone. Banyak sekali jenis handphone yang dijual di pasaran mulai dari jenis sim card yang digunakan, brandnya, hingga sistem operasinya. Jika dilihat dari sistem operasi ada hp android dan hp yang menggunakan sistem operasi iOS. Untuk handphone yang menggunakan sistem operasi iOS hanya khusus dimiliki oleh handphone yang diproduksi oleh Apple. Jika dilihat dari sim card yang digunakan jenis handphone dapat dibedakan menjadi hp CDMA dan hp GSM.</p>
            </li>
            <li>
            <h3>Handphone Android Murah</h3>

            <p>HP berbasis Android belakangan sangat digemari berbagai kalangan. Berkat fitur Google Play Store pada tiap hp android, Anda dapat memilih ribuan lebih aplikasi seperti game, peningkat produktivitas dan sebagainya. Lazada menyediakan berbagai merek hp android seperti android <a href="https://www.lazada.co.id/beli-handphone/samsung/">Samsung Galaxy</a>, Sony Xperia, Mito, HTC dan banyak lagi hp cina murah dan lokal lainnya.</p>
            </li>
            <li>
            <h3>Harga Ponsel</h3>

            <p>Lazada menyediakan berbagai macam hape android murah. Mulai dari hp cina, hp dual sim murah, hp samsung android termurah, hingga hp samsung paling murah. Dengan hanya mengunjungi Lazada.co.id saja anda sudah dapat menemukan info harga hp terlengkap. Lazada jual smartphone dan handphone murah. Dengan membeli handphone di lazada anda juga bisa kredit handphone secara online. Karena lazada menawarkan sistem pembayaran dengan cara kredit dengan cicilan 0%.</p>
            </li>
            </ul>

            <h2>Lazada: Situs Hp Nomor 1 di Indonesia</h2>

            <p style={paragraf2}>Di lazada anda dapat menemukan berbagai jenis handphone dengan harga yang beraneka ragam. Mulai dari harga hp dibawah 1 juta, harga hp dibawah 500 ribu, harga hp murah berkualitas, harga hp samsung android murah, harga hp samsung android termurah, harga ponsel samsung, harga ponsel terbaru, dan harga <a href="https://www.lazada.co.id/beli-smartphone/">smartphone</a> murah. Banyak keuntungan yang anda dapatkan dengan berbelanja di situs hp Lazada. Seperti jenis sistem pembayaran yang beraneka ragam mulai dari kredit hp dengan cicilan 0%, COD, serta voucher dan <a href="https://www.lazada.co.id/special-promotion/">diskon setiap hari</a>.</p></div></div>
            </Container>
            </div>
        )
    }
}

export default CategoryList