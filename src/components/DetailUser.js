import React from 'react'
import { Link } from 'react-router-dom';

const DetailUser = ({ changeJumlah, cart, produk, foto, setFoto, jumlah, setJumlah, id, addToCart }) => {
    const onHover = (e) => {
        setFoto(e.target.src);
    }
    const tambahJumlah = () => {
        setJumlah(jumlah + 1)
    }
    const kurangJumlah = () => {
        if (jumlah > 1) {
            setJumlah(jumlah - 1)
        }

    }
    const add = (e) => {
        let data = { id: id, title: produk.title, url: produk.url[0], price: produk.price, jumlah: document.getElementById('jumlah').value }
        let dataFind = cart.find(item => item.id === id)
        if(dataFind){
            let index = cart.indexOf(dataFind)
            dataFind.jumlah = Number(cart[index].jumlah) + Number(document.getElementById('jumlah').value)
            changeJumlah(index, dataFind)
        }else{
            addToCart(data)
        }
    }

    return (
        <div className="detail-user">
            <div className="row">
                <div className="col-3 img-produk">
                    <img src={foto} alt="" />
                    <hr />
                    <div className="row icon-gambar">
                        {produk.url.map((gbr, index) =>
                            <div className="col-4">
                                <div className="kotak-icon">
                                    <img src={gbr} alt="" onMouseEnter={onHover} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-6 detail-center">
                    <h4 className="judul">{produk.title}</h4>
                    <div className="penilaian">
                        <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> {produk.ulasan} Penilaian</p>
                        <p>Merek : {produk.category}</p>
                    </div>
                    <hr />
                    <h2 className="harga">Rp {produk.price}</h2>
                    <div className="row title-center">
                        <div className="col-2">
                            Promosi
                            </div>
                        <div className="col-10">
                            <div className="promo-center"> Belanja Rp300.000 dapatkan potongan Rp15.000</div>
                            <div className="promo-center"> Beli 2, Diskon 5% ; Beli 3, Diskon 6%</div>
                        </div>
                    </div>
                    <div className="row title-center">
                        <div className="col-2">
                            Cicilan
                            </div>
                        <div className="col-10">
                            <p className="cicilan">Sampai dengan 12 bulan, dengan pembayaran Rp {produk.price / 12} per bulan.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row title-center">
                        <div className="col-2">
                            kuantitias
                             </div>
                        <div className="col-10">
                            <button className="btn btn-jumlah" onClick={kurangJumlah}>-</button>
                            <input type="text" name="jumlah" id="jumlah" value={jumlah} />
                            <button className="btn btn-jumlah" onClick={tambahJumlah}>+</button>
                        </div>
                    </div>
                    <div className="button-detail">
                        <Link to="/cart">
                            <button className="btn btn-beli" onClick={add}>Beli Sekarang</button>
                        </Link>
                        <button className="btn btn-tambah" onClick={add}>Tambah ke Troli</button>
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
                            <p className="subtitle-right">{produk.city}</p>
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
                            <p className="ket">1 - 6 hari</p>
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