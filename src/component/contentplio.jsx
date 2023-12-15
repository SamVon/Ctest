import React from 'react'
import logo from '../assets/Me.jpg'


function contentplio() {
    function toggleFunction() {
        console.log('toggleFunction');
    }

    return (
    <div className="w3-content w3-container w3-padding-64" id="portfolio">
    <h3 className="w3-center">MY WORK</h3>
    <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br /> Click on the images to make them bigger</em></p><br />
  
   
    <div className="w3-row-padding w3-center">
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="The mist over the mountains" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="Coffee beans" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="Bear closeup" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="Quiet ocean" />
      </div>
    </div>
  
    <div className="w3-row-padding w3-center w3-section">
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="The mist" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="My beloved typewriter" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="Empty ghost train" />
      </div>
  
      <div className="w3-col m3">
        <img src={logo} style={{ width:"100%" }} onClick={ toggleFunction() } className="w3-hover-opacity" alt="Sailing" />
      </div>
      <button className="w3-button w3-padding-large w3-light-grey" style={{ margintop:"64px" }}>LOAD MORE</button>
    </div>
  </div>
  )
}

export default contentplio