import React from 'react'
import '../assets/css/Cart.css'
import { Link } from 'react-router-dom'
import BodyUntukmu from './BodyUntukmu';
function Cart({ cart }) {
    let price = 0

    return (
        <div>
            <div style={{ padding: "0px 80px", width: "100%", paddingTop: 120 }}>
                <div style={{ width: "66%", float: "left", marginRight: 10 }}>
                    <div style={{ width: "100%", background: "white", overflow: "hidden", color: "#999", padding: "5px" }}>
                        <div style={{ float: "left" }}>
                            <input type="checkbox" id="pilih"  />
                            <label class={'pilih'} for="pilih">PILIH SEMUA</label>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ margin: "5px 10px", fontSize: "10pt" }}><Link style={{ color: "#999", textDecoration: "none" }}><span class="fa fa-trash-o" style={{ padding: 5 }}></span>HAPUS</Link></p>
                        </div>
                    </div>
                    <div style={{ width: "100%", background: "white", color: "#999", marginTop: 10 }}>
                        <div style={{ width: "100%", overflow: 'hidden', background: "white", color: "#999", padding: "5px", borderBottom: "0.04px solid #ddd" }}>
                            <div style={{ float: "left" }}>
                                <input type="checkbox" id="d"  />
                                <label class={'d'} for="d">Gallery Dimyati <span style={{ position: 'absolute', margin: 5 }} className={'fa fa-chevron-right'}></span></label>
                            </div>
                            <div style={{ cursor: "pointer", float: "right", paddingRight: 10, paddingTop: 5, fontSize: "10pt", color: "#f57224" }}>
                                Dapatkan Voucher <span className={'fa fa-chevron-down'}></span>
                            </div>
                        </div>
                        {cart.map(item => {
                            price += item.price*item.jumlah
                            return (
                                <div style={{ overflow: 'hidden', padding: "20px 0px" }}>
                                    <div style={{ float: 'left', padding: 5 }}>
                                        <input type="checkbox" id="z" />
                                        <label class={'d'} for="z" style={{ width: 20 }}></label>
                                    </div>
                                    <div style={{ float: "left", width: '90px', marginRight: 10 }}>
                                        <img src={item.url} width='100%' />
                                    </div>
                                    <div style={{ width: 280, float: "left", marginRight: 40 }}>
                                        <p style={{ fontSize: "11pt", color: "black", marginBottom: 5 }}>{item.title}</p>
                                        <p style={{ fontSize: "9pt" }}>Merk Lainnya, Color Family:Black</p>
                                    </div>
                                    <div style={{ overflow: 'hidden', float: "left", marginRight: 40 }}>
                                        <p style={{ fontSize: "14pt", color: "#f57224", margin: 5 }}>{`Rp.${item.price}`}</p>
                                        {/* <p style={{ fontSize: "10pt", color: "", textDecoration: "line-through", margin: 5 }}>Rp150.000</p>
                                        <p style={{ fontSize: "11pt", color: "black" }}>-80%</p> */}
                                        <p style={{ fontSize: "15pt" }}><span className={'far fa-heart'} style={{ marginRight: 20, marginLeft: 10, cursor: "pointer" }}></span><span className={"fa fa-trash-o"} style={{ cursor: "pointer" }}></span></p>
                                    </div>
                                    <div style={{ marginTop: 10 }} >
                                        <button style={{ fontSize: "10pt", color: "#999", width: "35px", height: "35px", background: '#eee', border: "0", float: 'left' }}><span className={"fa fa-minus"}></span></button>
                                        <input style={{ width: 50, height: "35px", float: "left", textAlign: "center" }} value={item.jumlah}></input>
                                        <button style={{ fontSize: "10pt", color: "#999", width: "35px", height: "35px", background: '#eee', border: "0", float: 'left' }}><span className={"fa fa-plus"}></span></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{ width: "33%", padding: 10, background: 'white', float: "left" }}>
                    <div style={{ borderBottom: "1px solid black", }}>
                        <p>Lokasi</p>
                        <p style={{ fontSize: "9pt" }}><span className={'fas fa-map-marker-alt'} style={{ fontSize: "18pt", margin: "0px 10px" }}></span> Jawa Tengah,Kab. Pekalongan,Kedungwuni</p>
                    </div>
                    <div style={{ paddingTop: 15 }}>
                        <p style={{ fontSize: "13pt" }}>Ringkasan Pesanan</p>
                        <div style={{ overflow: "hidden" }}>
                            <p style={{ float: "left", fontSize: "10.5pt" }}>Subtotal (1 Barang)</p>
                            <p style={{ float: "right" }}>{`Rp.${price}`}</p>
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <p style={{ float: "left", fontSize: "10.5pt" }}>Biaya pengiriman</p>
                            <p style={{ float: "right" }}>Rp17500</p>
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <input placeholder={"Masukkan Kode Voucher"} style={{ width: "70%", padding: "6px 10px" }} />
                            <button style={{ background: "#1a9cb7", border: 0, color: "white", width: "27%", padding: "8px 10px", float: "right" }}>Gunakan</button>
                        </div>
                        <div style={{ fontSize: "9.5pt", marginTop: 8, overflow: "hidden", cursor: "pointer" }}>
                            Rencana cicilan tersedia untuk pesanan Anda <span className={'fa fa-chevron-down'} style={{ float: "right", fontSize: "10pt", margin: "2px 5px" }}></span>
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <p style={{ float: "left", margin: 0, marginTop: 20 }}>Total</p>
                            <p style={{ float: "right", margin: 0, marginTop: 20, color: "#f57224" }}>{`Rp.${price+17500}`}</p>
                            <p style={{ float: "right", clear: "both", fontSize: "10pt" }}>Termasuk PPN, jika berlaku</p>
                        </div>
                        <div>
                            <Link to={'/buatpesanan'}><button style={{ width: "100%", height: 40, background: "#f57224", border: 0, color: "white" }}>BUAT PESANAN</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BodyUntukmu />
        </div>
    )
}

export default Cart