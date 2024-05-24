import React from "react";
import ImgPex from '../../images/pexel.jpg';

const Home = () => {
  return (
    <section className="section-container">
      <div className="home-container container-flex">
        <div className="home">
          <h1 className="heading">This is about me</h1>
          <h4>Here you can see the visual representation of this project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btns">
            <button className="btn">Read More</button>
            <button className="btn">Check Now</button>
          </div>
        </div>
        <div className="img-container">
          <img src={ImgPex} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
