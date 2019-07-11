import React from 'react'

const DetailUser = () => {
    return (
        <div className="detail-user">
            <div className="row">
                <div className="col-3 img-produk">
                    <img src="https://my-test-11.slatic.net/p/ed7ba3445a1e73f565c815e69aae9913.jpg" alt="" />
                    <hr />
                    <div className="row icon-gambar">
                        <div className="col-4">
                            <div className="kotak-icon">
                                <img src="https://id-test-11.slatic.net/p/509c20af37a84f66c7ab4ff045924307.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="kotak-icon">
                                <img src="https://my-test-11.slatic.net/p/ed7ba3445a1e73f565c815e69aae9913.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 detail-center">
                    <h4 className="judul">LAPTOP Netbook Komputer 7 Inci 1024*600 TFT Layar Mikrofon Bluetooth 1G + 8G</h4>
                    <div className="penilaian">
                        <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 4 Penilaian</p>
                        <p>Merek : No Brand | Lebih banyak laptop dari No Brand</p>
                    </div>
                    <hr />
                    <h2 className="harga">Rp 979000</h2>
                    <div className="row title-center">
                        <div className="row">
                            <div className="col-2">
                                Promosi
                        </div>

                            <div className="col-10">
                                <div className="promo-center"> Belanja Rp300.000 dapatkan potongan Rp15.000</div>
                                <div className="promo-center"> Beli 2, Diskon 5% ; Beli 3, Diskon 6%</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                Cicilan
                        </div>
                            <div className="col-10">
                                <p className="cicilan">Sampai dengan 12 bulan, dengan pembayaran Rp81.583 per bulan.</p>
                            </div>
                        </div>

                        <hr />

                        <div className="row title-center">
                            <div className="col-2">
                                kuantitias
                        </div>
                            <div className="col-10">

                            </div>
                        </div>
                    </div>
                    <div className="button-detail">
                        <button className="btn btn-beli">Beli Sekarang</button>
                        <button className="btn btn-tambah">Tambah ke Troli</button>
                    </div>

                </div>

                <div className="col-3 detail-right">
                    <h6 className="title-right">
                        Pilihan pengiriman
                </h6>
                    <div className="row">
                        <div className="col-2">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">DKI Jakarta, Kota Jakarta Barat, Cengkareng</p>
                        </div>
                        <div className="col-2">
                            <i class="far fa-paper-plane"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">Dikirim dari luar negeri</p>
                        </div>

                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-2">
                            <i class="fas fa-bus"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">Ekonomi</p>
                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">Nikmati promosi gratis ongkir dengan belajar minimum Rp 200.000</p>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-2">
                            <i class="fas fa-gift"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">Standar</p>
                            <p className="ket">1 - 6 har</p>
                        </div>
                        <div className="col-2">
                            <i class="fas fa-money-check-alt"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right"> Bayar di tempat berlaku </p>
                        </div>
                    </div>

                    <hr />
                    <h6 className="title-right">Pengembalian & gransi</h6>
                    <div className="row">
                        <div className="col-2">
                            <i class="far fa-calendar-times"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right"> 7 hari pengembalian barang </p>
                            <p className="ket">Berubah pikiran tidak diperbolehkan</p>
                        </div>
                        <div className="col-2">
                            <i class="fas fa-heart-broken"></i>
                        </div>
                        <div className="col-10">
                            <p className="subtitle-right">Tidak ada garansi </p>
                        </div>
                    </div>
                    <h6 className="ket">Dibuat oleh </h6>
                    <h5 className="nama-store">Khusni Store</h5>
                    <div className="row table-detail">
                        <div className="col-4">
                            <p className="ket">Penilaian Positif seller</p>
                            <h3>92%</h3>
                        </div>
                        <div className="col-4">
                            <p className="ket">Pengiriman tepat waktu</p>
                            <h3>55%</h3>
                        </div>
                        <div className="col-4">
                            <p className="ket">Tingkat respon chat</p>
                            <h3>98%</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default DetailUser;