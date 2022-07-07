import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. we
          have proffessional with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='Guy with a camera' />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
