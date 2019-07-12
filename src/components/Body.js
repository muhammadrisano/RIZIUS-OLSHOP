import React from 'react'
import Body_promo from './Body_promo'
import BodyTerpopuler from './BodyTerpopuler'
import BodyKoleksi from './BodyKoleksi';
import BodyLazmall from './BodyLazmall';
import BodyKategori from '../components/BodyKategori';
import BodyUntukmu from '../components/BodyUntukmu'


let Body = () => {
    return (
        <div>
            <Body_promo />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"><button className="btn btn-icon-body"> <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1F0fSe21G3KVjSZFkXXaK4XXa.png" width="33px" alt="" /> LazMall </button></div>
                    <div className="col-3"><button className="btn btn-icon-body"> <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ZDbSe.GF3KVjSZFvXXb_nXXa.png" width="33px" alt="" /> Pulsa & eVouchers</button></div>
                    <div className="col-3"><button className="btn btn-icon-body"><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1MP2Te8GE3KVjSZFhXXckaFXa.png" width="33px" alt="" /> Voucher Belanja</button></div>
                    <div className="col-3"><button className="btn btn-icon-body"><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB19121e8Cw3KVjSZFuXXcAOpXa.png" width="33px" alt="" /> Global Collection</button></div>
                </div>
            </div>
            <BodyTerpopuler />
            <BodyKoleksi />
            <BodyLazmall />
            <BodyKategori />
            <BodyUntukmu />
        </div>
    )
}

export default Body