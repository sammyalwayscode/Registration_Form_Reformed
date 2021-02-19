import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <center>
      <div className="MainFooter">
        {/* <strong className="FirstText">Know More About Us</strong> */}
        <strong>...</strong>
        <div className="linksDiv">
          <i>Visit Our <a href="https://web.facebook.com/groups/brighterdayscodelab">Facebook</a> page</i>
          <i>Visit Our <a href="https://codelab-support.web.app">Website</a></i>
        </div>
        <div className="production">
          <strong>Produced By CODELAB.🚀</strong>
        </div>
      </div>
    </center>
  )
}

export default Footer
