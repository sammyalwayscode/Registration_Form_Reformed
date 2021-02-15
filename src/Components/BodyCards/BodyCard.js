import React, { useEffect, useState } from "react";
import pics from "../Img/me.jpeg";
import picse from "../Img/good.png";
import { app } from "../Base/Firebase";
// import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css'
import './BodyCards.css'
import imagesss from '../Img/49.jpg'

const db = app.firestore();

function BodyCard() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection('hackaton')

      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push(doc.data());
        });
        setUploads(item);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { Meta } = Card;
  return (
    <>
      {
        uploads.map(({ avatar, name, email }) => (
          <Card
            className="TheMainCard"
            hoverable
            style={{ width: "240px", height: "280px", textAlign: 'center', margin: '10px auto', marginLeft: '7px', marginRight: '7px', marginBottom: '9px', zIndex: "-999" }}
            cover={<img src={avatar} style={{ height: "200px", width: '100%', objectFit: 'cover' }} />}
          >
            <Meta title={name}
              description={email}
            />
          </Card>
        ))
      }
    </>
  )
}

export default BodyCard
