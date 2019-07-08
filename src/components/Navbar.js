import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{padding:5}}>
                <ul style={{ listStyleType: 'none' }} className={'navbar-nav ml-auto'}>
                    <li style={{fontSize:12,padding:0}}><Link>LEBIH MURAH DI APP</Link></li>
                    <li style={{fontSize:12}}><Link>MENJADI SELLER</Link></li>
                    <li style={{fontSize:12}}><Link>CUSTOMER CARE</Link></li>
                    <li style={{fontSize:12}}><Link>LACAK PESANAN</Link></li>
                    <li style={{fontSize:12}}><Link>LOGIN</Link></li>
                    <li style={{fontSize:12}}><Link>DAFTAR</Link></li>
                </ul>
            </nav>
            <div style={{ background: "rgba(0,0,0,.03)", paddingTop: 10, paddingBottom: 30 }}>
                <div style={{ margin: '0px 6%' }}>
                    <Link class="navbar-brand" to={"#"}><img src={"http://laz-img-cdn.alicdn.com/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"} style={{ width: 125 }} alt={"gambar"} /></Link>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Navbar