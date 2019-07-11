import React from 'react'
import lazmall from '../database/lazmall'

let BodyLazmall = () => {
    return (
        <div className="container-fluid lazmall">
            <h3>LazMall</h3>
            <div className="row">
                {lazmall.map((laz, index) =>
                    <div className="col-2">
                        <div class="card">
                            <div className="card-head"><img src={laz.url} class="card-img-top" alt="lazmall" /></div>
                            <div class="card-body">
                                <img src={laz.icon} alt="" className="img-thumbnail" />
                                <h5 class="card-title">{laz.title}</h5>
                                <p class="card-text">{laz.subtitle}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BodyLazmall