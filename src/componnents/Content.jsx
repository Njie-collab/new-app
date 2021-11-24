import React from "react";
import InfoCard from "./Login";
import Images from "./Images"


function Content() {
  const clickMe = (e) => {
      e.preventDefault()
      console.log("clicked")
  };
  
  return (
    <div>
      <Images/>
      <button onClick={clickMe} type="text" name="name">Click </button>
      {/*<InfoCard info={clickMe} />*/}
      <InfoCard/>
    </div>
  );
}

export default Content;
