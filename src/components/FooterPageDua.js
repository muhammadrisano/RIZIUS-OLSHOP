import React from "react";
import '../assets/css/footerPage.css';

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
  width:"70px",
  height: "px",
  backgroundSize: "px",
}
const payment2 = {
  backgroundPosition: "-329px -768px",
  width: "70px",
  height: "px",
  backgroundSize: "px",
}
const payment3 = {
  backgroundPosition: "-209px -829px",
  width: "70px",
  height: "px",
  backgroundSize: "px",
}
const pengiriman1 = {
  backgroundPosition: "-927px -634px",
  width: "120px",
  height: "px",
  backgroundSize: "px",
}
const pengiriman2 = {
  backgroundPosition: "-429px -828px",
  width: "70px",
  height: "px",
  backgroundSize: "px",
}
const pengiriman3 = {
  backgroundPosition: "-501px -832px",
  width: "75px",
  height: "51px",
  backgroundSize: "px",
}
const pengiriman4 = {
  backgroundPosition: "-355px -841px",
  width: "83px",
  height: "55px",
  backgroundSize: "px",
}
const pengiriman5 = {
  backgroundPosition: "-426px -583px",
  width: "130px",
  height: "60px",
  backgroundSize: "660px",
}
const pengiriman6 = {
  backgroundPosition: "-853px -769px",
  width: "78px",
  height: "3",
  backgroundSize: "px",
}
const verified = {
  backgroundPosition: "-240px -530px",
  width: "150px",
  height: "120px",
}

const FooterPageDua = () => {
  return (
    <div className="footer">
      <div className="batasFooter">
        <div className="row bg-#F8F8FF ">
          <div className="col-3">
            <div className="pertama">
              <h6 className="">Layanan Pelanggan</h6>
                <p className="footer-li"><a href="//www.lazada.co.id/helpcenter/">Pusat Bantuan</a>
                  <p className="footer-li" data-spm-anchor-id="a2o4j.home.footer_top.i0.57994ceeNnwjwj"><a href="//www.lazada.co.id/helpcenter/payments/">Cara Pembelian</a>
                    <p className="footer-li"><a href="//www.lazada.co.id/helpcenter/shipping-and-delivery/">Pengiriman</a>
                      <p className="footer-li"><a href="//www.lazada.co.id/helpcenter/products-on-lazada/#answer-faq-internationalproduct-ans">Kebijakan Produk Internasional</a>
                        <p className="footer-li"><a href="//www.lazada.co.id/helpcenter/returns-refunds/#answer-faq-return-ans">Cara Pengembalian</a>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
              <div className="">
                  <a style={pstyle} href="/">Ada pertanyaan? Hubungi kami di live chat (24 Jam)</a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="kedua">
              <h6 className="footer-title">Jelajahi Lazada</h6>
                <p className="footer-li"><a href="//www.lazada.co.id/about/">Tentang Lazada</a>
                  <p className="footer-li"><a href="//www.lazada.co.id/lazada-affiliate-program/">Afﬁliate Program</a>
                    <p className="footer-li"><a href="//www.lazada.com/work-at-lazada/">Karir</a>
                      <p className="footer-li"><a href="//www.lazada.co.id/terms-of-use/">Syarat &amp; Ketentuan</a>
                        <p className="footer-li"><a href="//www.lazada.co.id/privacy-policy/">Kebijakan Privasi</a>
                          <p className="footer-li"><a href="//www.lazada.co.id/press/">Press &amp; Media</a>
                            <p className="footer-li"><a href="https://www.lazada.co.id/marketplace/">Jual Di Lazada</a>
                              <p className="footer-li"><a href="//www.lazada.co.id/security/">Lazada Security</a>
                                <p className="footer-li"><a href="https://redmart.com/">Redmart</a><p className="footer-li"><a href="https://pages.lazada.co.id/wow/i/id/LandingPage/IPR">Intellectual Property Protection</a>
                                </p>
                              </p>
                            </p>
                           </p>
                         </p>
                       </p>
                     </p>
                   </p>
                 </p>
               </p>
              </div>
            </div>
          <div className="col-3">
            <div className="lzd-footer-width-50">
              <div className="lzd-footer-app-downloads">
                <div className="lzd-footer-appIcon pull-left logo icon-logo-lazada-footer">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151839/Lazada-App-Icon-330x198.png" style={logoLazada} alt="" />
                </div>
                <div className="">
                  <div className="heartBeat" >Go where your heart beats</div>
                    <div className="text">Download the App</div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img src="https://univrx.com/wp-content/uploads/sites/3/2017/12/Available-on-App-Store.png" width="120px" className="playStore" href="http://bit.ly/lazada-ios-app" alt="" />
            <img src="https://zello.com/wp-content/uploads/2018/08/google-play-badge.png" width="130px" className="" href="http://bit.ly/lazada-android-app" alt="" />
          </div>
       
        </div>
          <div className="row bg-white">
            <div className="col-3">
              <div className="footer-second">

                    <h5 className="lzd-footer-h3" data-spm-anchor-id="a2o4j.home.1056575960.i1.57994ceeNnwjwj">Metode Pembayaran</h5>
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment1} src="https://www.visa.bidroom.com/assets/img/visa-logo.png" alt="" />
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment2} src="https://img.etimg.com/thumb/height-480,width-640,imgsize-114814,msid-60955286/.jpg" alt="" />
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment3} src="https://previews.123rf.com/images/roxanabalint/roxanabalint1503/roxanabalint150300270/38208522-promotional-label-sticker-or-stamp-for-cash-on-delivery-on-white-vector-illustration.jpg" alt="" />
                  </div>

            </div>
           <div className="col-3"></div>
            <div className="col-3"><div className="lzd-footer-width-25">
              <h5 className="lzd-footer-h3">Jasa Pengiriman</h5>
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Lazada Express" style={pengiriman1} src="http://s.kaskus.id/images/2016/02/10/8089634_20160210110450.jpg" />
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="JNE" style={pengiriman2} src="https://awsimages.detik.net.id/community/media/visual/2018/11/22/b2e0f558-ae89-45ea-a782-b9d4ee28ebe3.png?w=780&q=90" />
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Ninja Express" style={pengiriman3} src="https://i2.wp.com/seismicell.com/wp-content/uploads/2018/05/logo.png?resize=1000%2C426&ssl=1" />
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="GoSend" style={pengiriman4} src="http://cdn.elevenia.co.id/g/0/1/6/5/8/1/24016581_B.jpg" />
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Sicepat" style={pengiriman5} src="http://sicepat.com/application/websicepat/assets/img/logo-main.png" />
                <img className="lzd-icon-delivery lzd-footer-sprit lzd-footer-sprit-id " alt="Grab Parcel" style={pengiriman6} src="http://www.majalahict.com/wp-content/uploads/2017/11/grab.png" />
            </div>
           </div>
           <div className="col-3">
            <div className="lzd-footer-width-25">
              <h5 className="lzd-footer-h3">Verified by</h5>
                <img className="lzd-footer-sprit" style={verified} alt="" src="http://www.traffics.de/wp-content/uploads/2016/07/PCI-06.16.png" />
            </div>
           </div>
          </div>
        {/* ======== */}        
        <div className="footer-fourth">
            <div className="col-12">
              <h6 class="lzd-footer-title">Lazada Southeast Asia</h6> 
                <div className="bendera">
                <a className="country-id" href="https://www.lazada.co.id"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png" alt="" width="50px"/></a>
                <a className="country-my" href="https://www.lazada.com.my"><img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="" width="60px" /></a>
                <a className="country-ph" href="https://www.lazada.com.ph"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png" alt="" width="60px" /></a>
                <a className="country-sg" href="https://www.lazada.sg"><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" alt="" width="60px" height="40px" /></a>
                <a className="country-th" href="https://www.lazada.co.th"><img src="https://i2.wp.com/www.visionwear.com/wp-content/uploads/2011/09/thailand.gif?fit=550%2C367&ssl=1" width="50px" alt="" /></a>
                <a className="country-vn" href="https://www.lazada.vn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png" width="50px" alt="" /></a>
                </div>  
            </div>
            </div>
        </div>
      </div>
  )
}

export default FooterPageDua;