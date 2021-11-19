import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

const Home = () => {
  const context = useContext(MyContext);
  const { music } = context;

  const musicList = music.map((item) => 
  <Link key={item.id}  to="/playerDetail" state={item}>{item.title}</Link>);

  return <div>{musicList}</div>;
};

export default Home;
