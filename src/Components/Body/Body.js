import React from 'react'
import 'antd/dist/antd.css';
import './Body.css'
// import introVid from '../Videos/vid.mp4'
import BodyCard from '../BodyCards/BodyCard';
import bgImg from '../Img/hackton.jpg'
import Footer from '../Footer/Footer';
import { Carousel } from 'antd';
import deo from '../Videos/vid.mp4'
import 'antd/dist/antd.css';

function Body() {
  const contentStyle = {

  }

  return (
    <div>

      <Carousel style={{ backgroundColor: 'darkblue' }} >

        <video
          src={deo} type="video/mp4" autoPlay loop muted />

      </Carousel>

      <div className="BodyDiv">


        {/* <video
          height="100%" width="100%"
          autoPlay loop muted src={introVid} alt="shortVedioClip" type="video/mp4" /> */}
        {/* <img src={bgImg} alt="" className="heroImg" /> */}
        <div className="Cardsdiv">
          <BodyCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body
