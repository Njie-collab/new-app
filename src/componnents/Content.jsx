import React from "react";
import InfoCard from "./InfoCard";
import Images from "./Images"


function Content() {
  const clickMe = (e) => {
      e.preventDefault()
      console.log("clicked")
  };
  
  return (
    <div>
      <Images/>
      {/*<InfoCard info={clickMe} />*/}
    </div>
  );
}

export default Content;
