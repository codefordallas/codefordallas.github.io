import React from "react";
import "./About.css";

import Mission from "../Mission";

const About = () => {
  return (
    <section id="About">
      <h2>About Code for Dallas</h2>
      <p>
        Code for Dallas is a non-profit organization dedicated to using
        technology to make Dallas a better place to live, work, and play. We
        bring together civic-minded developers, designers, data geeks, leaders,
        and innovators who volunteer their time to create open source solutions
        for the Dallas community.
      </p>

      <Mission />

      <h3>Who We Are</h3>
      <p>
        We are a diverse group of volunteers from various backgrounds and
        professions, united by our belief in the power of technology to effect
        positive change in our community.
      </p>

      <h3>How We Help</h3>
      <p>
        We develop open-source projects that address community needs, provide
        tech education, and advocate for digital rights and accessibility.
      </p>

      <h3>How to Join</h3>
      <p>
        If you're interested in joining Code for Dallas, get in touch with us
        through our contact page, or come to one of our monthly meetups. We
        welcome people of all skill levels and backgrounds!
      </p>
    </section>
  );
};

export default About;