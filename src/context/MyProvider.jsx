import{ useState} from "react";

import MyContext from "./MyContext";

import musicArray from "../componnents/musicData";


const MyProvider = (props) => {

  const [music] = useState(musicArray);
  /*const{togglePlayPause}=useState()*/
  const [cart, setCart] = useState([]);
  const [login ,setLogin]=useState({email:"",password:""})

  const addtoCart = (element) => {
    const addItem = cart.find((item) => item.id === element.id);
    if (addItem === undefined) {
      setCart([...cart, { ...element, quantity: 1 }]);
    } else {
      addItem.quantity += 1;
      const index = cart.indexOf(addItem);
      const clone = [...cart];
      clone.splice(index, 1, addItem);
      setCart(clone);
    }
  };
  


function handleDelete(element) {
  const deleteItem = cart.find((item) => item.name === element.name);
  const index = cart.indexOf(deleteItem);
  const clone = [...cart];
  clone.splice(index, 1);
  setCart(clone);
}


const decremnent = (element) => {
  const subtract = cart.find((item) => item.name === element.name);
  const index = cart.indexOf(subtract);
  subtract.quantity -= 1;
  const clone = [...cart];
  subtract.quantity >= 1
    ? clone.splice(index, 1, subtract)
    : clone.splice(index, 1);
  setCart(clone);
};
const totalCalc = (item) => {
  let total = cart.reduce((acc, next) => acc + next.quantity * next.price, 0);
  return total;
};

  return (
    <MyContext.Provider
      value={{
        music,
        login,
        setLogin,
        addtoCart,
        cart,
        handleDelete,
        decremnent,
        totalCalc,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
