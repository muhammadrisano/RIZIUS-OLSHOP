import React from 'react'
import untukmu from '../database/untukmu'

let BodyUntukmu = () => {
    return (
        <div className="container-fluid untukmu" style={{ overflow: "hidden" }}>
            <h3>Hanya Untukmu</h3>
            <div className="row">
                {untukmu.map((untuk, index) =>
                    <div className="col-2">
                        <div class="card">
                            <div className="card-head">
                                <img src={untuk.url} class="card-img-top" alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{untuk.title}</h5>
                                {/* <p class="card-text"> of the card's content.</p> */}
                                <h4>Rp {untuk.harga}</h4>
                                <h6><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><span> ({untuk.ulasan})</span></h6>
                                <div className="card-kota">{untuk.kota}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BodyUntukmu;