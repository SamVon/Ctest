import React from 'react'
import '../App.css'

function header() {
    return (
        <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
            <div className="w3-display-middle" style={{ whitespaces:"nowrap" }}>
                <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">Wellcome<span className="w3-hide-small"> To</span> Rasume</span>
            </div>
        </div>
    )
}

export default header