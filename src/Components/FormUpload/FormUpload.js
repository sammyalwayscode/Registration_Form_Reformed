import React, { useEffect, useState } from "react";
import pics from "../Img/me.jpeg";
import picse from "../Img/good.png";
import { app } from "../Base/Firebase";

const db = app.firestore();

function FormUpload() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection("Facebook")
      .orderBy("date", "asc")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setUploads(item);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "20px",
        display: "flex",

        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {uploads.map(({ name, avatar }) => (
        <div
          style={{
            height: "300px",
            width: "300px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "3px 5px 5px -1px gray",
            borderRadius: "10px",
            border: "1px solid silver",
            margin: "15px",
          }}
        >
          <img style={{ height: "30px", marginLeft: "230px" }} src={picse} />
          <div
            style={{
              height: "220px",
              width: "230px",
              backgroundColor: "white",
              borderRadius: "50px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "150%",
              }}
              src={avatar}
            />
          </div>
          <div>
            <h3 style={{ textTransform: "uppercase", fontFamily: "poppins" }}>
              {name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FormUpload;
