import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  InboxOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import pic from "../Img/code.jpg";
import { app } from "../Base/Firebase";
import { useHistory } from "react-router-dom";
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
const db = app.firestore();
function Forminput() {
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [num, setNum] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  const [uploads, setUploads] = useState([]);

  const ImageUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);
    console.log(File);

    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const UploadData = async () => {
    await db
      .collection("hackaton")
      .doc()
      .set({
        name,
        email,
        sex,
        num,
        date: Date.now(),
        avatar: await fileUrl,
      });
  };

  return (
    <div className="container">
      <div className="card_holder">
        <div
          className="card_body"
          style={{
            marginTop: "-200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4
            className="card_name"
            style={{ marginTop: "200px", backgroundColor: "red", height: 0, marginBottom: "30px" }}
          >
            Please Fill In Your Details
          </h4>

          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{ backgroundColor: "red" }}
            style={{ marginTop: "10px" }}
            size="large"
            placeholder="FullName"
            name=" name"
            prefix={<UserOutlined />}
          />

          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ backgroundColor: "red", fontSize: "5px" }}
            style={{ marginTop: "15px" }}
            size="large"
            placeholder="Email"
            prefix={<InboxOutlined />}
          />
          <Input
            value={sex}
            onChange={(e) => {
              setSex(e.target.value);
            }}
            style={{ backgroundColor: "red", fontSize: "5px" }}
            style={{ marginTop: "15px" }}
            size="large"
            placeholder="Gender"
            prefix={<UserSwitchOutlined />}
          />

          <Input
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
            style={{ backgroundColor: "red" }}
            style={{ marginTop: "15px" }}
            size="large"
            placeholder="+234 565 75646"
            prefix={<CallOutlinedIcon />}
          />
          <div>Upload An Image</div>
          <input
            onChange={ImageUpload}
            className="input_file"
            type="file"
            style={{ marginTop: "50px" }}
          />

          <strong style={{ width: '280px', textAlign: 'center', fontSize: 'small', marginTop: '10px' }}>Please Wait For 5 seconds While Your Information Is Been Processed Before You Click Summit</strong>

          <Button
            onClick={() => {
              UploadData();
              hist.push("/thanks");
            }}
            style={{
              marginTop: "30px",
              width: "100px",
              backgroundColor: "#8D156A",
              color: "white",
            }}
          >
            SUBMIT
          </Button>
          <div className="images">
            <img
              className="images"
              style={{ height: "30px", marginTop: "50px" }}
              src={pic}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forminput;
