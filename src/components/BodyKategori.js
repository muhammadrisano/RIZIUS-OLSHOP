import React, { Component } from 'react';
import kategori from '../database/kategori';
import { Link } from 'react-router-dom';

let BodyKategori = () => {
    return (
        <div className="container-fluid kategori" >
            <h3>Kategori</h3>
            {kategori.map((kat, index) =>
                <Link to={"/categoryList/" + kat.category} style={{ color: 'black' }}>
                    <div class="card float-left">
                        <img src={kat.url} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{kat.title}</h5>
                        </div>
                    </div>
                </Link>

            )
            }
            <div className="clear-left"></div>
        </div >
    )
}


export default BodyKategori;