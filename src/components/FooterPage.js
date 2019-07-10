import React from "react";


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
  width: "120px",
  height: "120px",
}
const textArea = {
  display: "none",
}
const facebook = {
  backgroundPosition: "-767px -672px",
}
const twitter = {
  backgroundPosition: "-721px -671px",
}
const linkedin = {
  backgroundPosition: "-812px -624px",
}
const googlePlus = {
  backgroundPosition: "-767px -624px",
}
const instagram = {
  backgroundPosition: "-680px -624px",
}
const youtube = {
  backgroundPosition: "-852px -671px",
}
const pinterest = {
  backgroundPosition: "-812px -671px",
}
const blog = {
  backgroundPosition: "-680px -671px",
}


const FooterPage = () => {
  return (
    <div className="container-fluid footer">
        <div className="row">
          <div className="col-3">
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
          </div>
          <div className="col-3">
            <div className="lzd-footer-width-25">
              <h3 className="footer-title">Jelajahi Lazada</h3>
                 <ul className="footer-list">
                   <li className="footer-li"><a href="//www.lazada.co.id/about/">Tentang Lazada</a></li>
                   <li className="footer-li"><a href="//www.lazada.co.id/lazada-affiliate-program/">Afﬁliate Program</a></li>
                   <li className="footer-li"><a href="//www.lazada.com/work-at-lazada/">Karir</a></li>
                   <li className="footer-li"><a href="//www.lazada.co.id/terms-of-use/">Syarat &amp; Ketentuan</a></li>
                   <li className="footer-li"><a href="//www.lazada.co.id/privacy-policy/">Kebijakan Privasi</a></li>
                   <li className="footer-li"><a href="//www.lazada.co.id/press/">Press &amp; Media</a></li>
                   <li className="footer-li"><a href="https://www.lazada.co.id/marketplace/">Jual Di Lazada</a></li>
                   <li className="footer-li"><a href="//www.lazada.co.id/security/">Lazada Security</a></li>
                   <li className="footer-li"><a href="https://redmart.com/">Redmart</a></li>
                   <li className="footer-li">
                   <a href="https://pages.lazada.co.id/wow/i/id/LandingPage/IPR">Intellectual Property Protection</a>
                   </li>
                 </ul>
              </div>
            </div>
          <div className="col-3">
            <div className="lzd-footer-width-50">
              <div className="lzd-footer-app-downloads">
                <div className="lzd-footer-appIcon pull-left logo icon-logo-lazada-footer">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151839/Lazada-App-Icon-330x198.png" style={logoLazada} alt="" />
                </div>
                <div className="pull-left lzd-app-download-text">
                  <div className="title">Go where your heart beats</div>
                    <div className="text">Download the App</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <img src="https://news-cdn.softpedia.com/images/news2/iPhone-Devs-Reminded-to-Use-App-Store-Badges-for-Increased-Visibility-of-their-App-2.png" width="120px" className="" href="http://bit.ly/lazada-ios-app" alt="" />
            <img src="https://zello.com/wp-content/uploads/2018/08/google-play-badge.png" width="130px" className="" href="http://bit.ly/lazada-android-app" alt="" />
          </div>
        </div>
          <div className="row bg-white">
            <div className="col-3">
              <div className="footer-second">
                <div className="lzd-footer-inner">
                  <div className="lzd-footer-width-50">
                    <h3 className="lzd-footer-h3" data-spm-anchor-id="a2o4j.home.1056575960.i1.57994ceeNnwjwj">Metode Pembayaran</h3>
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment1} src="https://www.visa.bidroom.com/assets/img/visa-logo.png" alt="" />
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment2} src="https://img.etimg.com/thumb/height-480,width-640,imgsize-114814,msid-60955286/.jpg" alt="" />
                      <img className="lzd-icon-payment lzd-footer-sprit" style={payment3} src="https://previews.123rf.com/images/roxanabalint/roxanabalint1503/roxanabalint150300270/38208522-promotional-label-sticker-or-stamp-for-cash-on-delivery-on-white-vector-illustration.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
           <div className="col-3"></div>
            <div className="col-3"><div className="lzd-footer-width-25">
              <h3 className="lzd-footer-h3">Jasa Pengiriman</h3>
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
              <h3 className="lzd-footer-h3">Verified by</h3>
                <img className="lzd-footer-sprit" style={verified} alt="" src="http://www.traffics.de/wp-content/uploads/2016/07/PCI-06.16.png" />
            </div>
           </div>
          </div>
        {/* ======== */}
        <div className="text-footer">
          <div className="row">
            <div className="col-3">
              <h5 className="lzd-footer-title">Online Shopping Mall Terkemuka di Indonesia</h5>
               <p className="particle">Lazada adalah perintis e-commerce (online shopping) di beberapa negara dengan pertumbuhan tercepat di dunia yang menawarkan pengalaman belanja online cepat, aman dan nyaman dengan produk-produk dalam kategori mulai dari fashion, peralatan elektronik, peralatan rumah tangga, mainan anak-anak dan peralatan olahraga. Lazada selalu berjuang untuk memberikan pelanggan yang terbaik termasuk dengan menawarkan beberapa metode pembayaran, pengembalian gratis, layanan konsumen yang baik dan garansi komitmen. Sebagai situs belanja online terbaik di Indonesia, Lazada.co.id selalu menyediakan deretan produk tak terhitung jumlahnya yang selalu di update tiap hari. Kami selalu memastikan bahwa anda mendapatkan penawaran terbaru dan terbaik lewat promo-promo kami.</p>
               <p class="particle">Situs Jual Beli Online Terbaik dan Terpercaya</p>
               <p class="particle">Kami terus memperluas jangkauan produk kami seperti kategori <a href="//www.lazada.co.id/fashion-new-arrival/">Fashion</a> dan <a href="//www.lazada.co.id/watches/">Jam Tangan</a>. Kami menawarkan pilihan kualitas produk terbaik yang akan Anda temukan semua pada ujung jari Anda. Belanja online di Indonesia tidak pernah semudah ini! Tetap terhubung dan dapatkan penawaran terbaru dan transaksi setiap harinya. Ingat, setiap hari adalah hari belanja di Lazada. Lebih dari sekedar salah satu toko online e-commerce di Indonesia, Lazada.co.id adalah prioritas tertinggi kami untuk menciptakan pengalaman belanja online terbaik untuk setiap pelanggan di Indonesia. Jadi mulai belanja online dan jika Anda punya pertanyaan silakan telepon atau email kami. Selain menyediakan pengalaman beli online yang lengkap dan mudah bagi konsumen, lazada.co.id juga memastikan kepuasan seller untuk jual online produk mereka dengan berbagai dukungan yang maksimal. Sehingga sinergi antara pelanggan dan seller menciptakan budaya jual beli online terbaik di Indonesia!menciptakan pengalaman belanja online terbaik untuk setiap pelanggan di Indonesia. Jadi mulai belanja online dan jika Anda punya pertanyaan silakan telepon atau email kami. Selain menyediakan pengalaman beli online yang lengkap dan mudah bagi konsumen, lazada.co.id juga
               </p>
            </div>
            <div className="col-3">                <p>
              memastikan kepuasan seller untuk jual online produk mereka dengan berbagai dukungan yang maksimal. Sehingga sinergi antara pelanggan dan seller menciptakan budaya jual beli online terbaik di Indonesia!</p>
              <p class="particle">Belanja Online Lebih Mudah, Murah, Gak Pake Ribet</p>
              <p class="particle">Sesuai dengan tagline kami "Effortless Shopping" / "Belanja gak pake ribet" Lazada Indonesia (lazada.co.id) menawarkan solusi untuk masyarakat Indonesia dapat menikmati berbagai kemudahan dalam berbelanja online dengan menyediakan website yang mudah digunakan dan sistem pembayaran online yang lengkap. Kami menjamin kenyamanan anda ketika anda  browsing produk yang sedang dicari dan juga menjamin opsi pembayaran yang aman. Pilihan pembayaran kami termasuk kartu kredit, cash on delivery, Bank transfer, Mobile banking dan bahkan melalui berbagai layanan pembayaran online. Dan jika Anda ingin membawa keranjang belanja Anda di manapun Anda pergi, Lazada App ada untuk membantu Anda menelusuri Lazada, membeli barang-barang dan tetap update dengan promo terbaru kami. Bahkan, pada aplikasi Lazada,kami memiliki promo sendiri yang berbeda dari lazada versi desktop.</p>
            </div>
            <div className="col-3">
               <div class="lzd-footer-top-category lzd-footer-category-left" data-spm-anchor-id="a2o4j.home.footer_mid.i0.42b04ceeCETPYz">
                  <h5 class="lzd-footer-title">TOP CATEGORIES &amp; BRANDS</h5>
                    <div class="lzd-footer-categoty-division">
                      <h5 class="lzd-footer-title-small">
                        <span class="lzd-footer-title-small">AUTOMOTIVE &amp; GADGETS</span>
                      </h5>
                      <a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/yamaha/">Yamaha</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/oem/">OEM</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/honda/">Honda</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/vespa/">Vespa</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/axio/">Axio</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/kyoto/">Kyoto</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/pioneer/">Pioneer</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/kawasaki/">Kawasaki</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/toyota/">Toyota</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/otomotif-dan-gadgets/">more...</a>
                    </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">BABY &amp; TODDLER</span>
                    </h5>
                      <a class="lzd-footer-category-tag" href="//www.lazada.co.id/mamypoko/">MamyPoko</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jual-perlengkapan-bayi-balita/merries/">Merries </a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jual-perlengkapan-bayi-balita/pampers/">PAMPERS</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/wyeth-s26/">Wyeth S26</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/bebelac/">Bebelac</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-popok-pispot-bb/">Popok</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-susu-formula/">Susu Formula</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/enfa/">Enfagrow</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jual-perlengkapan-bayi-balita/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">CAMERAS</span>
                    </h5>
                      <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/xiaomi/">Xiaomi</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/kogan/">Kogan</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/nikon/">Nikon</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/canon/">Canon</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/samsung/">Samsung</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/fujifilm/">Fujifilm</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/olympus/">Olympus</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/gopro/">GoPro</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kamera/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">COMPUTERS &amp; LAPTOPS</span>
                    </h5>
                      <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/asus/">ASUS</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/lenovo/">Lenovo</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/hp/">HP</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-penyimpanan-data/wd/">WD</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/acer/">Acer</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/apple/">Apple</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/logitech/">Logitech</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/intel/">Intel</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/perangkat-permainan-pc/">Gaming PC</a>
                      ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-komputer-laptop/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">FASHION</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/fashion-pria-wanita-anak/oem/">OEM</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/levistrauss/">levi's</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/fashion-pria-wanita-anak/macbeth/">Macbeth</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/zada/">Zada</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/alibi-paris/">Alibi Paris</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/converse/">Converse</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/puma/">Puma</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/fossil/">Fossil</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/new-balance/">New Balance</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/fashion-pria-wanita-anak/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">GROCERIES</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/zippo/">Zippo</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/ovomaltine/">Ovomaltine</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/jelly-belly/">Jelly Belly</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/ohome/">Ohome</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/naraya/">Naraya</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-permen-coklat/">Snack Import</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/indomie/">Indomie</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/samyang/">Samyang</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-makanan-minuman/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">HEALTH &amp; BEAUTY</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kesehatan-kecantikan/sk-ii/">SK-II</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kesehatan-kecantikan/moment/">Moment</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/">Herbalife</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/dermawand/">Dermawand</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kesehatan-kecantikan/philips/">Philips</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/l-oreal/">L'Oreal</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/nyx/">NYX</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/maybelline-sis/">Maybelline</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/nivea/">Nivea</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-kesehatan-kecantikan/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">HOME &amp; LIVING</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/vicenza/">Vicenza</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/oem/">OEM</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/oxone/">Oxone</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/calista/">Calista</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/aiueo/">AIUEO</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/bosch/">BOSCH</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/terry-palmer/">Terry Palmer</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/maxim/">Maxim</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-perabotan-rumah-tangga/">more...</a>
                  </div>
                </div>
              </div>           
            <div className="col-3">
                <div class="lzd-footer-top-category lzd-footer-category-right">
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">MEDIA, MUSIC &amp; BOOKS</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/yamaha/">Yamaha</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/oem/">OEM</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/buku-agama/">Digital Al-Quran</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/nektar/">Nektar</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/casio/">Casio</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/sonymusic/">Sony Music</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/universal-music-indonesia/">Universal Music</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-media-musik-dan-buku/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">MOBILES &amp; TABLETS</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/samsung/">Samsung</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/xiaomi/">Xiaomi</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/infinix/">Infinix</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/lenovo/">Lenovo</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/asus/">ASUS</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/apple/">Apple</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/htc/">HTC</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/blackberry/">Blackberry</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/sony/">Sony</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/oppo/">Oppo</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/apple/">Apple iPhone 7</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-handphone-tablet/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">SPORTS &amp; OUTDOORS</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/oem/">OEM</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/nike/">Nike</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/adidas/">Adidas</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/bfit/">BFIT</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/reebok/">Reebok</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/coleman/">Coleman</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/puma/">Puma</a>
                    , <a class="lzd-footer-category-tag" href="//www.lazada.co.id/olahraga-dan-outdoor/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">TOYS &amp; GAMES</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/lego/">LEGO</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/oem/">OEM</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/syma/">Syma</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/tomindo/">Tomindo</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/bandai/">Bandai</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/hot-wheels/">Hot Wheels</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/tomica/">Tomica</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/aksesoris-pokemon-go/">Pokemon</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-mainan-anak/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">TRAVEL &amp; LUGGAGE</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/polo-team/">Polo Team</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/navy-club/">Navy Club</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/onlan/">Onlan</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/oem/">OEM</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/bgc/">BGC</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/herschel/">Herschel</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/american-tourister/">American Tourister</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tas-koper/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">TV, AUDIO / VIDEO, GAMING, GADGETS</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/samsung">Samsung</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/sony">Sony</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/lg">LG</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/xiaomi">Xiaomi</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/i-one">I-one</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/tv-buying-guide">Panduan Membeli TV</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-tv-audio-video-permainan-dan-gadget/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">VOUCHERS AND SERVICES</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/mobilerecharge/">Isi Ulang Pulsa</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/voucher-layanan/indosat">Indosat</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/voucher-layanan/pln/">PLN</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/voucher-layanan/telkomsel/">Telkomsel</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/voucher-layanan/apple/">Apple</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/xl-brand/">XL</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/voucher-layanan/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">WATCHES SUNGLASSES JEWELLERY</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/jam-tangan-kacamata-dan-perhiasan/swiss-army/">Swiss Army</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jam-tangan-kacamata-dan-perhiasan/casio/">Casio</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jam-tangan-kacamata-dan-perhiasan/oem/">OEM</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/bluelans/">Blue lans</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jam-tangan-kacamata-dan-perhiasan/alexandre-christie/">Alexandre Christie</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/jam-tangan-kacamata-dan-perhiasan/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">HOME APPLIANCES</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/philips/">Philips</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/sharp/">Sharp</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/panasonic/">Panasonic</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/miyako/">Miyako</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/samsung/">Samsung</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/lg/">LG</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/nescafe-dolce-gusto/">Nescafe</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/cosmos/">Cosmos</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/beli-peralatan-rumah-tangga/">more...</a>
                  </div>
                  <div class="lzd-footer-categoty-division">
                    <h5 class="lzd-footer-title-small">
                      <span class="lzd-footer-title-small">PROMO SPESIAL</span>
                    </h5>
                    <a class="lzd-footer-category-tag" href="//www.lazada.co.id/koleksi-taobao/">Koleksi TaoBao</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/lzdcampaign-sensesyen/">Promo Fashion #Sensesyen</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/cny-mega-sale/">Ramayana Promo Imlek #PalingCuan</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/online-revolution/">Harbolnas 2017</a>
                    ,<a class="lzd-footer-category-tag" href="//www.lazada.co.id/special-promotion/">more...</a>
                  </div>
                </div>
               </div>
              </div>
            </div>
 
        <div class="footer-fourth">
          <div class="lzd-footer-inner">
            <div class="lzd-footer-width-50" data-spm="venture">
              <h3 class="lzd-footer-title">Lazada Southeast Asia</h3>
                <a className="country-id" href="https://www.lazada.co.id"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png" alt="" width="50px" /></a>
                <a className="country-my" href="https://www.lazada.com.my"><img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="" width="60px" /></a>
                <a className="country-ph" href="https://www.lazada.com.ph"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png" alt="" width="60px" /></a>
                <a class="country-sg" href="https://www.lazada.sg"><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" alt="" width="60px" height="40px" /></a>
                <a class="country-th" href="https://www.lazada.co.th"><img src="https://i2.wp.com/www.visionwear.com/wp-content/uploads/2011/09/thailand.gif?fit=550%2C367&ssl=1" width="50px" alt="" /></a>
                <a class="country-vn" href="https://www.lazada.vn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png" width="50px" alt="" /></a>
            </div>
            <div class="lzd-footer-width-25" data-spm="sns">
              <h3 class="lzd-footer-title">Follow Us</h3>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://www.facebook.com/LazadaIndonesia" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_fbk" style={facebook}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://www.twitter.com/LazadaID" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_twr" style={twitter}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://www.linkedin.com/company/lazada" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_lnk" style={linkedin}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://plus.google.com/101850977969394149607" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_ggp" style={googlePlus}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://instagram.com/lazada_id/" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_ins" style={instagram}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://www.youtube.com/user/lazadaID" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_ytb" style={youtube}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://www.pinterest.com/LazadaID/" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_pnt" style={pinterest}></a>
              <a class="lzd-follow-us-icon lzd-footer-sprit" href="https://blog.lazada.co.id" data-spm-click="gostr=/lzdpub.footer.sns;locaid=d_blg" style={blog}></a>
            </div>
            <div class="lzd-footer-width-25">
              <div class="lzd-footer-copyright">
                © Lazada 2019
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FooterPage;