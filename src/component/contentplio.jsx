import React from 'react'
import logo from '../assets/Me.jpg'
import ModalImage from "react-modal-image";




function contentplio() {

  return (
    <div className="w3-content w3-container w3-padding-64" id="portfolio">
      <h3 className="w3-center">MY WORK</h3>
      <p className="w3-center"><em>Did image is <br /></em> i am work in the office</p><br />


      <div className="w3-row-padding w3-center">
        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>

        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>

        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>

        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>
      </div>

      <div className="w3-row-padding w3-center w3-section">
        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b"  hideDownload="true"/>
        </div>

        <div className="w3-col m3">
          <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>

        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>

        <div className="w3-col m3">
        <ModalImage small={logo} large={logo} style={{ width: "100%" }} onClick={"#"} className="w3-hover-opacity" alt="in the small-b" hideDownload="true"/>
        </div>
        <button className="w3-button w3-padding-large w3-light-grey" style={{ margintop: "64px" }}>LOAD MORE</button>
      </div>
    </div>
  )
}

export default contentplio