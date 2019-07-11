import React from 'react';
import '../assets/css/home.css'
import terpopuler from '../database/terpopuler';

let BodyTerpopuler = () => {
    return (
        <div className="container-fluid terpopuler">
            <h3>Paling Terpopuler</h3>
            <div className="row">
                <div className="col-2">
                    <div className="populer-depan text-center">
                        <img src={terpopuler[0].url} alt="" />
                        <h6>Wedes Wanita</h6>
                        <p>69,809</p>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        {terpopuler.map((childProduk, index) =>
                            <div className="col-3">
                                <div className="populer-child">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={childProduk.url} alt="" />
                                        </div>
                                        <div className="col-8">
                                            <h6>{childProduk.title}</h6>
                                            <p>{childProduk.subtitle} Produk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BodyTerpopuler