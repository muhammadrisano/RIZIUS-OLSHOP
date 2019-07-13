import React from 'react'
import { Link } from 'react-router-dom'
function buatPesanan({ cart }) {
    let price = 0

    return (
        <div>
            <div style={{ overflow: "hidden", padding: "0px 80px", width: "100%", paddingTop: 120 }}>
                <div style={{ width: "66%", float: "left", marginRight: 10 }}>
                    <div style={{ width: "100%", background: "#fafafa", overflow: "hidden", color: "#999", padding: "10px" }}>
                        <div style={{ float: "left" }}>
                            <p style={{ fontSize: "10pt", margin: 0 }}>BARANG</p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ margin: "0px 10px", fontSize: "10pt" }}>KUANTITAS</p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "10pt", margin: 0, marginRight: 140 }}>HARGA</p>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden', width: "100%", background: "white", color: "#999", marginTop: 10 }}>
                        <div style={{ width: "100%", overflow: 'hidden', background: "#fafafa", color: "#999", padding: "10px 5px" }}>
                            <div style={{ float: "left" }}>
                                <p style={{ margin: 0, marginLeft: 5, color: "black", fontWeight: "bold", fontSize: "10pt" }}>Pesanan</p>
                            </div>
                            <div style={{ float: "right", paddingRight: 10, fontSize: "10pt" }}>
                                <p style={{ margin: 0 }}>Dikirim oleh <span style={{ color: "black" }}>Gallery Dimyati</span></p>
                            </div>
                        </div>
                        <div style={{ overflow: 'hidden', padding: "10px" }}>
                            <div>
                                <p style={{ margin: 0, marginBottom: 8, fontSize: "10pt", color: "black" }}>Pilihan pengiriman</p>
                                <div style={{ cursor: "pointer", marginBottom: 20, background: "#fbfdfe", float: "left", border: "1px solid #0094b6", padding: "10px", borderRadius: "5px" }}>
                                    <div style={{ float: "left", marginRight: 10 }}><span className={"fas fa-check-circle"} style={{ color: "#0094b6" }}></span></div>
                                    <div style={{ color: "black", overflow: "hidden", marginRight: 50 }}>
                                        <p style={{ margin: 0, marginBottom: 7, fontSize: "11pt" }}>Rp17.500</p>
                                        <p style={{ margin: 0, fontSize: "10pt" }}>Standar</p>
                                        <p style={{ margin: 0, fontSize: "10pt" }}>Dapatkan Pada 13 - 19 Jul</p>
                                    </div>
                                </div>
                            </div>
                            {cart.map(item => {
                                price += item.price*item.jumlah
                                return (
                                    <div style={{ padding: 20 }}>
                                        <div style={{ float: "left", width: '90px', marginRight: 10, clear: "both" }}>
                                            <img src={item.url} width='100%' />
                                        </div>
                                        <div style={{ width: 360, float: "left", marginRight: 10 }}>
                                            <p style={{ fontSize: "11pt", color: "black", marginBottom: 5 }}>{item.title}</p>
                                            <p style={{ fontSize: "9pt" }}>Merk Lainnya, Color Family:Black</p>
                                        </div>
                                        <div style={{ overflow: 'hidden', float: "left", marginRight: 40 }}>
                                            <p style={{ fontSize: "14pt", color: "#f57224", margin: 5 }}>{`Rp.${item.price}`}</p>
                                            {/* <p style={{ fontSize: "10pt", color: "", textDecoration: "line-through", margin: 5 }}>Rp150.000</p>
                                            <p style={{ fontSize: "11pt", color: "black" }}>-80%</p>
                                            <p style={{ fontSize: "15pt" }}><span className={"fa fa-trash-o"} style={{ cursor: "pointer" }}></span></p> */}
                                        </div>
                                        <div style={{ float: "right" }} >
                                            <p>Kuantitas: {item.jumlah}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div style={{ width: "33%", padding: 10, background: 'white', float: "left" }}>
                    <div>
                        <Link to={'/payment'}><button style={{ width: "100%", height: 40, background: "#f57224", border: 0, color: "white" }}>BUAT PESANAN SEKARANG</button></Link>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <p style={{ fontSize: "12pt", fontWeight: "bold" }}>Pengiriman dan Penagihan </p>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ float: "left" }}>
                            <span className={'fas fa-map-marker-alt'} style={{ fontSize: "13pt", margin: "0px 10px", color: "#5bbbce" }}></span>
                        </div>
                        <div style={{ overflow: "hidden", float: 'left' }}>
                            <p style={{ fontSize: "10pt", fontWeight: "bold", marginBottom: 5 }}>Zidni Hidayat</p>
                            <p style={{ fontSize: "10pt", marginBottom: 5 }}> Jawa Tengah,Kab. Pekalongan,Kedungwuni</p>
                            <p style={{ fontSize: "9pt", color: "#999", margin: 0 }}>Pilih label untuk pengiriman yang efektif</p>
                            <p style={{ marginBottom: 5, padding: "4px 10px 10px 0px" }}>
                                <button style={{ height: 58, width: 110, borderRadius: 6, border: "1px solid #999", background: "#f8f8f8", marginRight: 10, color: "#999" }}><span className={"fa fa-briefcase"}></span> Kantor</button>
                                <button style={{ height: 58, width: 110, borderRadius: 6, border: "1px solid #999", background: "#f8f8f8", color: "#999" }}><span className={"fa fa-home"}></span> Rumah</button>
                            </p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "11pt" }}><Link style={{ textDecoration: "none" }}>Ubah</Link></p>
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ float: "left" }}>
                            <span className={'fas fa-list-alt'} style={{ fontSize: "10pt", margin: "0px 10px", color: "#5bbbce" }}></span>
                        </div>
                        <div style={{ float: "left" }}>
                            <p style={{ margin: 0 }}>Penagihan ke alamat yang sama</p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "11pt" }}><Link style={{ textDecoration: "none" }}>Ubah</Link></p>
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ float: "left" }}>
                            <span className={'fas fa-phone'} style={{ fontSize: "10pt", margin: "0px 10px", color: "#5bbbce" }}></span>
                        </div>
                        <div style={{ float: "left" }}>
                            <p style={{ margin: 0 }}>0895358483247</p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "11pt" }}><Link style={{ textDecoration: "none" }}>Ubah</Link></p>
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ float: "left" }}>
                            <span className={'fas fa-envelope'} style={{ fontSize: "10pt", margin: "0px 10px", color: "#5bbbce" }}></span>
                        </div>
                        <div style={{ float: "left" }}>
                            <p style={{ margin: 0 }}>zidnihidayatedby@gmail.com</p>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "11pt" }}><Link style={{ textDecoration: "none" }}>Ubah</Link></p>
                        </div>
                    </div>
                    <div style={{ paddingTop: 15, clear: "both" }}>
                        <p style={{ fontSize: "13pt" }}>Ringkasan Pesanan</p>
                        <div style={{ overflow: "hidden" }}>
                            <p style={{ float: "left", fontSize: "10.5pt" }}>Subtotal</p>
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
                            <Link to={'/payment'}><button style={{ width: "100%", height: 40, background: "#f57224", border: 0, color: "white" }}>BUAT PESANAN</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default buatPesanan