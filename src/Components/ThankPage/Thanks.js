import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Thanks() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        <h1>Thank You For Registering</h1>
        <strong style={{ marginBottom: '60px' }}>We'll Keep You Updated By Sending Necessary Informations To Your Email</strong>
        <div><Link to="/"><Button>Go Back Home</Button></Link></div>
      </center>
    </div>
  )
}

export default Thanks
