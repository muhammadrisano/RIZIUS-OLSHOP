import React from 'react'
import '../assets/css/home.css'
import promo from '../database/promo'

let Body_promo = () => {

    const promoProduk = promo.map((produk, index) => {
        return (
            <div className="col-md-2">
                <div class="card" key={index}>
                    <img src={produk.url} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{produk.title}</h5>
                        <p class="card-text">{produk.subtitle}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (

        <div className="body_promo">

            <div className="container-fluid">
                <div className="iklan">
                    <div className="row">

                    </div>
                </div>
                <div className="promo_terbaik">
                    <h2>Promo Terbaik Untukmu</h2>
                    <div className="row">
                        {promoProduk}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body_promo