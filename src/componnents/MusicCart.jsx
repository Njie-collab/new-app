import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import MyContext from "../context/MyContext";


const MusicCart = () => {
  const context = useContext(MyContext);
  const { cart, addtoCart, handleDelete, decremnent, totalCalc, login } =
    context;
  const navigate = useNavigate();

 const { music } = context;

 const musicList = music.map((item) => (
   <Link key={item.name} to="/playerDetail" state={item}>
     {item.title}
   </Link>
 ));

  const checkAndNavigate = () => {
    login.success
      ? navigate("/checkout", { replace: true })
      : navigate("/home", { replace: true });
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Cart Is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.title}>
            <p>{item.name}</p>
            <p>{item.duration}</p>
            <img src={item.image_src} alt="" />
            <p>{item.quantity}</p>
            <button onClick={() => handleDelete(item)}>Remove item</button>
            <button onClick={() => addtoCart(item)}>+</button>
            <button onClick={() => decremnent(item)}>-</button>
          </div>
        ))
      )}

      <div className="total">
        <p>TOTAL PRICE : {totalCalc(cart).toFixed(2)} €</p>
        <button onClick={() => checkAndNavigate()}>checkout</button>
      </div>
      <Link to="/home">
        {checkAndNavigate}
        {musicList}
      </Link>
    </div>
  );
};

export default MusicCart;
