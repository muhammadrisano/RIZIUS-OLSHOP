import React from "react";
import "../index.css";

const pstyle = {
  background: "#f36f36",
  display: "inline-block",
  color: "#0F136D",
  padding:" 2px 4px",
  cursor: "pointer",
}
const logoLazada = {
  borderRadius: "30px !important",
  width: "90px",
}
const payment1 = {
  backgroundPosition: "-768px -768px",
  width:" px",
  height: "px",
  backgroundSize: "px",
}
const payment2 = {
  backgroundPosition: "-329px -768px",
  width: "px",
  height: "px",
  backgroundSize: "px",
}
const payment3 = {
  backgroundPosition: "-209px -829px",
  width: "px",
  height: "px",
  backgroundSize: "px",
}
const pengiriman1 = {
  backgroundPosition: "-927px -634px",
  width: "40px",
  height: "31px",
  backgroundSize: "px",
}
const pengiriman2 = {
  backgroundPosition: "-429px -828px",
  width: "50px",
  height: "31px",
  backgroundSize: "px",
}
const pengiriman3 = {
  backgroundPosition: "-501px -832px",
  width: "53px",
  height: "31px",
  backgroundSize: "px",
}
const pengiriman4 = {
  backgroundPosition: "-355px -841px",
  width: "53px",
  height: "18px",
  backgroundSize: "px",
}
const pengiriman5 = {
  backgroundPosition: "-426px -583px",
  width: "120px",
  height: "46px",
  backgroundSize: "660px",
}
const pengiriman6 = {
  backgroundPosition: "-853px -769px",
  width: "28px",
  height: "36px",
  backgroundSize: "px",
}
const verified = {
  backgroundPosition: "-240px -530px",
  width: "100px",
  height: "100px",
}



const FooterPage = () => {
  return (
   <div className="">
      <div className="pertama">
         <h3 className="">Layanan Pelanggan</h3>
            <ul className="footer-list">
               <li className="footer-li"><a href="//www.lazada.co.id/helpcenter/">Pusat Bantuan</a></li>
               <li className="footer-li" data-spm-anchor-id="a2o4j.home.footer_top.i0.57994ceeNnwjwj"><a href="//www.lazada.co.id/helpcenter/payments/">Cara Pembelian</a></li>
               <li className="footer-li"><a href="//www.lazada.co.id/helpcenter/shipping-and-delivery/">Pengiriman</a></li>
               <li className="footer-li"><a href="//www.lazada.co.id/helpcenter/products-on-lazada/#answer-faq-internationalproduct-ans">Kebijakan Produk Internasional</a></li>
               <li className="footer-li"><a href="//www.lazada.co.id/helpcenter/returns-refunds/#answer-faq-return-ans">Cara Pengembalian</a></li>
                  <div className="">
                  <a style={pstyle} href="/">Ada pertanyaan? Hubungi kami di live chat (24 Jam)</a>
                  </div>
            </ul>
      </div>
      <div className="lzd-footer-width-25">
        <h3 className="footer-title">Jelajahi Lazada</h3>
          <ul className="footer-list">
            <li className="footer-li">
             <a href="//www.lazada.co.id/about/">Tentang Lazada</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.co.id/lazada-affiliate-program/">Afﬁliate Program</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.com/work-at-lazada/">Karir</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.co.id/terms-of-use/">Syarat &amp; Ketentuan</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.co.id/privacy-policy/">Kebijakan Privasi</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.co.id/press/">Press &amp; Media</a>
            </li>
            <li className="footer-li">
              <a href="https://www.lazada.co.id/marketplace/">Jual Di Lazada</a>
            </li>
            <li className="footer-li">
              <a href="//www.lazada.co.id/security/">Lazada Security</a>
            </li>
            <li className="footer-li">
              <a href="https://redmart.com/">Redmart</a>
            </li>
            <li className="footer-li">
              <a href="https://pages.lazada.co.id/wow/i/id/LandingPage/IPR">Intellectual Property Protection</a>
            </li>
          </ul>
      </div>
      <div className="lzd-footer-width-50">      
      <div className="lzd-footer-app-downloads">
        <div className="lzd-footer-appIcon pull-left logo icon-logo-lazada-footer">
          <img src="https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151839/Lazada-App-Icon-330x198.png" style={logoLazada} alt=""/>
        </div>
        <div className="pull-left lzd-app-download-text">
          <div className="title">Go where your heart beats</div>
          <div className="text">Download the App</div>
        </div>
        <img src="https://news-cdn.softpedia.com/images/news2/iPhone-Devs-Reminded-to-Use-App-Store-Badges-for-Increased-Visibility-of-their-App-2.png" width="120px" className="" href="http://bit.ly/lazada-ios-app" alt="" />
        <img src="https://zello.com/wp-content/uploads/2018/08/google-play-badge.png" width="130px"className="" href="http://bit.ly/lazada-android-app" alt="" />
      </div>
      </div>
      <div class="footer-second">
       <div class="lzd-footer-inner">
        <div class="lzd-footer-width-50">
           <h3 class="lzd-footer-h3" data-spm-anchor-id="a2o4j.home.1056575960.i1.57994ceeNnwjwj">Metode Pembayaran</h3>
            <span class="lzd-icon-payment lzd-footer-sprit" style={payment1}></span>
              <span class="lzd-icon-payment lzd-footer-sprit" style={payment2}></span>
                <span class="lzd-icon-payment lzd-footer-sprit" style={payment3}></span>
        </div>
      <div class="lzd-footer-width-25">
        <h3 class="lzd-footer-h3">Jasa Pengiriman</h3>
          <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Lazada Express" style={pengiriman1}></span>
            <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="JNE" style={pengiriman2}></span>
              <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Ninja Express" style={pengiriman3}></span>
                <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="GoSend" style={pengiriman4}></span>
                  <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Sicepat" style={pengiriman5}></span>
                    <span class="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Grab Parcel" style={pengiriman6}></span>
      </div>
        <div class="lzd-footer-width-25">
          <h3 class="lzd-footer-h3">Verified by</h3>
            <span class="lzd-footer-sprit" style={verified}></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FooterPage;