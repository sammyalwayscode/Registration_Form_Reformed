import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Thanks.css'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function Thanks() {
  return (
    <div className="thanksContainerMain">
      <div>
        <div className='firstThanksText'>Hi, Thank you for your willingness to participate in the</div>
        <div className='secondThanksText'>{'<Smart Ajegunle Hackathon>'}</div>
        <div>Below is the information about the event:</div>
        <div className='cardHolder'>
          <div className='eventCard'>
            <p className='eventDay'> <EventOutlinedIcon /> Event Day 1</p>
            <div className='cardNo1'>
              <DateRangeOutlinedIcon />
              <div>19th March, 2021</div>
              <AccessTimeOutlinedIcon />
              <div>10:00am</div>
              <LocationOnOutlinedIcon />
              <div className='venueDiv'>Dominion city, Eat24 mall, Achakpo, Olodi Apapa, Lagos</div>
            </div>
          </div>
          <div className='eventCard'>
            <p className='eventDay'> <EventOutlinedIcon /> Event Day 2</p>
            <div className='cardNo2'>
              <DateRangeOutlinedIcon />
              <div>20th March, 2021</div>
              <AccessTimeOutlinedIcon />
              <div> 1:00pm</div>
              <LocationOnOutlinedIcon />
              <div className='venueDiv'> Dominion city, Eat24 mall, Achakpo, Olodi Apapa, Lagos</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          We look forward to seeing you.</div>
        <strong> From: Codelab Team</strong>

        <div style={{ marginBottom: '20px' }}><Link to="/"><Button>Go Back Home</Button></Link></div>
      </div>
    </div>
  )
}

export default Thanks
