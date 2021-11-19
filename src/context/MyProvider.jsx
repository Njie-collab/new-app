import{ useState } from "react";

import MyContext from "./MyContext";

import musicArray from "../componnents/musicData";


const MyProvider = (props) => {

  const [music] = useState(musicArray);

  return (
    <MyContext.Provider value={{ music }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
