import React from 'react'
import koleksi from '../database/koleksi'
let BodyKoleksi = () => {

    return (
        <div>
            <div className="container-fluid koleksi">
                <h3>Paling Terpopuler</h3>
                <div className="row">
                    {koleksi.map((brg, index) =>
                        <div className="col-3">
                            <div className="koleksi-child">
                                <h6>{brg.title}</h6>
                                <p>{brg.jumlah} Produk</p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={brg.url1} alt="gambar1" />
                                    </div>
                                    <div className="col-4">
                                        <img src={brg.url2} alt="gambar2" />
                                    </div>
                                    <div className="col-4">
                                        <img src={brg.url3} alt="gambar2" />
                                    </div>
                                </div>
                            </div>
                        </div>



                    )}


                </div>
            </div>
        </div>
    )
}

export default BodyKoleksi