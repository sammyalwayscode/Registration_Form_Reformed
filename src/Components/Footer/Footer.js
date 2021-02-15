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
          <i>Chat With <a href="https://web.facebook.com/gbemi.bukola">Mrs Bukola Peter</a></i>
        </div>
        <div className="production">
          <strong>Produced By Ayama Indidi, Olorunda Samuel and Ekeke Gedion all students of CODELAB.🚀</strong>
        </div>
      </div>
    </center>
  )
}

export default Footer
