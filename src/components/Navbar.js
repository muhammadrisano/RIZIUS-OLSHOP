import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ padding: 3 }}>
                <ul style={{ listStyleType: 'none', marginRight: '80px' }} className={'navbar-nav ml-auto'}>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>LEBIH MURAH DI APP</Link></li>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>MENJADI SELLER</Link></li>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>CUSTOMER CARE</Link></li>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>LACAK PESANAN</Link></li>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>LOGIN</Link></li>
                    <li style={{ fontSize: 13, padding: 0, marginRight: 33 }}><Link style={{ color: "black", textDecoration: "none" }}>DAFTAR</Link></li>
                </ul>
            </nav>
            <div style={{ background: "white", paddingTop: 10, paddingBottom: 20, overflow: "hidden" }}>
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