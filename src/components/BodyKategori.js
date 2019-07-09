import React from 'react';
import kategori from '../database/kategori';
let BodyKategori = () => {
    return (
        <div className="container-fluid kategori">
            <h3>Kategori</h3>
            {kategori.map((kat, index) =>
                <div class="card float-left">
                    <img src={kat.url} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{kat.title}</h5>
                    </div>
                </div>

            )}
            <div className="clear-left"></div>
        </div>
    )
}

export default BodyKategori;