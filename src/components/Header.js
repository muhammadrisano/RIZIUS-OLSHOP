import React, { Component } from 'react'
import '../assets/css/home.css'
import slide1 from '../assets/images/header/kisspng-computer-icons-system-information-system-5abf3769004b83.2630223215224810010012.jpg'
import slide2 from '../assets/images/header/TB1a4CcXET1gK0jSZFhXXaAtVXa.png_1200x1200Q100.jpg_.webp'
import slide3 from '../assets/images/header/TB1q1b4Xlr0gK0jSZFnXXbRRXXa.png_1200x1200Q100.jpg_.webp'
import slide4 from '../assets/images/header/TB1Xgv5Xlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp'
import Sidebar from './Sidebar';


const Header = () => {
    return (
        <div>
            <Sidebar />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="slider1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="slider2" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="slider3" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide4} className="d-block w-100" alt="slider3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Header
