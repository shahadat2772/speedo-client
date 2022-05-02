import React from "react";
import Report from "../../Report/Report";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Inventories from "../Inventories/Inventories";
import NewArrival from "../NewArrival/NewArrival";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <NewArrival></NewArrival>
      <Report></Report>
      <Footer></Footer>
    </div>
  );
};

export default Home;
