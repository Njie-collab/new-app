import React, { useContext, useState, useEffect, useRef } from "react";

import MyContext from "../context/MyContext";

function InfoCard() {
  const context = useContext(MyContext);

  const InputRef = useRef();

  const { login, setLogin } = context;
  const email = process.env.email;
  const password = process.env.password;

  const [sub, setSub] = useState({ success: false });
  const [error, setError] = useState({ error: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*setSub(e.target.value)*/
    email === login.email && password === login.password
      ? setSub({ success: true })
      : setError({ error: "check your information" });
  };

  const handleForm = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("myitem", login);
  }, [login]);

  return (
    <div>
      <form>
        <label htmlFor="Email">Email</label>
        <input
          ref={InputRef}
          type="text"
          name="email"
          value={login.email}
          onChange={handleForm}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={login.password}
          onChange={handleForm}
        />
        <label>Submit</label>
        <button onClick={() => handleSubmit()} type="submit">
          Submit
        </button>
        {sub.success === false && <div>{error.error}</div>}
      </form>
    </div>
  );
}

export default InfoCard;
