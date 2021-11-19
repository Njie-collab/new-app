import React from "react";
import Images from "../Images/img1.jpg";
import Images2 from "../Images/img2.jpg";
import Images3 from "../Images/img3.jpg";
import Images4 from "../Images/img4.jpg";

const ImagesFun = () => {
  return (
    <div>
     

      <img
        style={{
          width: "400px",
          margin: "20px",
        }}
        src={Images}
        alt=""
      />

      <img
        style={{
          width: "400px",
          height: "265px",
          margin: "20px",
        }}
        src={Images2}
        alt=""
      />

      <img
        style={{
          width: "400px",
          margin: "20px",
        }}
        src={Images3}
        alt=""
      />

      <img
        style={{
          width: "400px",
          height: "284px",
        }}
        src={Images4}
        alt=""
      />
    </div>
  );
};

export default ImagesFun;
