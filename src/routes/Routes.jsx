
import React, { HashRouter, Routes as Switch, Route } from "react-router-dom";
import MyProvider from "../context/MyProvider";
import Header from "../componnents/Header"
import About from "../componnents/About";
import Home from "../componnents/Home";
import Footer from "../componnents/Footer";
import Content from "../componnents/Content";
import InfoCard from "../componnents/InfoCard";
import PlayerDetail from "../componnents/PlayerDetail";
import ProductBtn from "../componnents/ProductBtn";
import MusicCart from "../componnents/MusicCart";

const Routes = () => {
  return (
    <MyProvider>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/playerDetail" element={<PlayerDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/" element={<MusicCart />} />
          <Route path="/productbtn" element={<ProductBtn />} />
          <Route path="/infocard" element={<InfoCard />} />
        </Switch>
        <Footer />
      </HashRouter>
    </MyProvider>
  );
};

export default Routes;
