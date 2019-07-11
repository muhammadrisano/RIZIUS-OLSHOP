import React from 'react'

function payment() {
    return (
        <div style={{ marginBottom: 100, overflow: "hidden" }}>
            <div style={{ padding: "0px 80px", width: "100%", paddingTop: 120 }}>
                <p style={{ fontSize: "17pt" }}>Pilih Metode Pembayaran</p>
                <div style={{ width: "67.5%", float: "left", marginRight: 10 }}>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1qIthr67nBKNjSZLeXXbxCFXa-80-80.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Kredit/Kartu Debit</p>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Bayar di Tempat</p>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1ZJ69rYZnBKNjSZFKXXcGOVXa-80-80.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt="" />
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Melalui Bank Transfer</p>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1J6_6rYZnBKNjSZFGXXbt3FXa-80-80.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Bayar di counter</p>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Alfamart/Indomaret</p>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1zkQlr77mBKNjSZFyXXbydFXa-80-80.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Cicilan Kartu Kredit</p>
                    </div>
                    <div id={'klik'} onClick={function () { document.getElementById('klikmodal').style.display = "block"; document.getElementById('klik').style.height = "133px"; document.getElementById('klik').style.marginBottom = "0px" }} style={{ float: "left", zIndex: 10, marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1xp99d_tYBeNjy1XdXXXXyVXa-400-400.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>KlikBCA   </p>
                    </div>
                    <div id={'klikmodal'} style={{ width: "98.8%", boxShadow: "0px 0px 2px #999", position: "relative", zIndex: 100, clear: "both", padding: 40, background: "white", marginBottom: 5, display: "none" }}>
                        <div>
                            <p style={{ fontSize: "11pt" }}>Pesanan akan diproses setelah melakukan pembayaran. Silahkan mengikuti instruksi pembayaran pada tahap selanjutnya.</p>
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <p style={{ fontSize: "9.5pt", margin: 0, marginBottom: 5 }}>Akun KlikBCA Anda</p>
                            <input style={{ width: "45%", padding: "10px", fontSize: "9pt" }}></input>
                        </div>
                        <div>
                            <button style={{ width: 250, height: 50, color: "white", border: 0, background: "#f57224" }}>
                                Konfirmasi Pesanan
                            </button>
                        </div>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1Z6lerGmWBuNjy1XaXXXCbXXa-400-400.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Kredivo</p>
                    </div>
                    <div style={{ float: "left", marginRight: 5, marginBottom: 5, textAlign: "center", width: "128px", height: "128px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <img src={'https://laz-img-cdn.alicdn.com/tfs/TB1ytPmKcfpK1RjSZFOXXa6nFXa-160-160.png'} width="40" style={{ marginLeft: "50%", transform: "translateX(-50%)" }} alt=""/>
                        <p style={{ fontSize: "9pt", fontWeight: "bold", margin: 0 }}>Akulaku</p>
                    </div>
                </div>
            </div>
            <div style={{ width: "28%", padding: 10, background: 'white', float: "left" }}>
                <div style={{ marginTop: 20, overflow: "hidden" }}>
                    <p style={{ float: "left", fontSize: "13pt", fontWeight: "bold" }}>Riwayat pesanan</p>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <p style={{ float: "left", fontSize: "10pt", color: "#999" }}>Subtotal (1 Barang)</p>
                    <p style={{ float: "right", margin: 0 }}>Rp47.000</p>
                </div>
                <div>
                    <p style={{ float: "left", fontSize: "13pt", color: "#333", paddingTop: 10 }}>Jumlah Total</p>
                    <p style={{ float: "right", margin: 0, color: "#f57224", fontSize: "20pt" }}>Rp47.000</p>
                </div>
            </div>
        </div>
    )
}

export default payment