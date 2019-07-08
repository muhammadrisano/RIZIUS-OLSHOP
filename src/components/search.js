import React from 'react'

function search() {
    return(
        <div>
            <input name={"search"} placeholder={"Cari di Lazada"} style={{
                padding:'13px 19px',
                background:"#eff0f5",
                border: "none",
    outline: 'none',
    color:'#212121'
            }} />
            <span style={{background:'#f57224',    padding: '14px 15px'}}><img src={"data:image/svg+xml;charset=utf-8,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M695.467 622.933h-38.4l-12.8-12.8c46.933-55.466 76.8-128 76.8-204.8 0-174.933-140.8-315.733-315.734-315.733s-320 136.533-320 311.467S226.133 716.8 401.067 716.8c76.8 0 149.333-29.867 204.8-76.8l12.8 12.8v38.4l243.2 243.2 72.533-72.533-238.933-238.934zm-294.4 0c-119.467 0-217.6-98.133-217.6-217.6s98.133-217.6 217.6-217.6 217.6 98.134 217.6 217.6c4.266 119.467-93.867 217.6-217.6 217.6z' fill='%23FFF'/%3E%3C/svg%3E"} width={"30"}/></span>
        </div>
    )
}

export default search