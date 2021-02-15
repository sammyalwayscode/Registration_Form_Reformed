import React from 'react'
import './Header.css'
import { Button } from 'antd'
import logo from '../Img/sch_logo.png'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='grneralHeader'>
      <div className='subGeneralHeader'>
        <Link to="/"><img src={logo} alt="" width="150px" /></Link>
        <Link to="/register" ><Button>Register Here</Button></Link>
      </div>
    </div>
  )
}

export default Header
