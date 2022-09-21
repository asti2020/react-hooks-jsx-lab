import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello i have created this so far so good</p>
    <img src={image} alt="I made this"/>

  </div>;
}

export default About;
