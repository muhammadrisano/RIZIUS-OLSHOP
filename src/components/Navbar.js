import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul style={{ listStyleType: 'none' }} className={'navbar-nav ml-auto'}>
                    <li><Link>LEBIH MURAH DI APP</Link></li>
                    <li><Link>MENJADI SELLER</Link></li>
                    <li><Link>CUSTOMER CARE</Link></li>
                    <li><Link>LACAK PESANAN</Link></li>
                    <li><Link>LOGIN</Link></li>
                    <li><Link>DAFTAR</Link></li>
                </ul>
            </nav>
            <div style={{ background: "rgba(0,0,0,.03)", paddingTop:10}}>
                <div style={{margin:'0px 6%'}}>
                <Link class="navbar-brand" to={"#"}><img src={"http://laz-img-cdn.alicdn.com/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"} style={{ width: 100 }} alt={"gambar"} /></Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar