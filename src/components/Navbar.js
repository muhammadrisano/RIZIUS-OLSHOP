import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
import '../assets/css/Navbar.css'

function Navbar(props) {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <ul className={'navbar-nav ml-auto'}>
                    <li><Link>LEBIH MURAH DI APP</Link></li>
                    <li><Link>MENJADI SELLER</Link></li>
                    <li><Link>CUSTOMER CARE</Link></li>
                    <li><Link>LACAK PESANAN</Link></li>
                    <li><Link>LOGIN</Link></li>
                    <li><Link>DAFTAR</Link></li>
                </ul>
            </nav>
            <div className={"search-bar"}>

                <div style={{ margin: '0px 6%' }}>
                    <div style={{ width: '16.5%', overflow: 'hidden', float: 'left' }}>
                        <Link class="navbar-brand" to={"#"} style={{ float: 'left' }}><img src={"http://laz-img-cdn.alicdn.com/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"} style={{ width: 128 }} alt={"gambar"} /></Link>
                    </div>
                    <div style={{ width: '58%', float: 'left' }}>
                        <Search />
                    </div>
                    <div style={{ float: 'left' }}>
                        <Link to={""}><img src="//laz-img-cdn.alicdn.com/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png" alt="gambar" style={{ width: 52, padding: 10 }} /></Link>
                    </div>
                    <div style={{ float: 'right' }}>
                        <Link to={""}><img src={'//laz-img-cdn.alicdn.com/images/ims-web/TB1vIvSbMFY.1VjSZFnXXcFHXXa.png'} style={{ width: 200 }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar