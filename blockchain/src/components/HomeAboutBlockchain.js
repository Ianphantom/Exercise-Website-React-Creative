import React from "react";
import styled from "styled-components";

import AboutBlockchainImage from "../img/aboutBlockchain.png";

const AboutBlockchain = () => {
  return (
    <AboutBlockhains>
      <AboutBlockhainsContainer className='container'>
        <Description>
          <h3>ABOUT</h3>
          <h1>About Blockchain</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tortor nisl, dapibus vitae tortor ut, gravida porta arcu. Aenean
            tincidunt nulla quis viverra tempus. Ut ac interdum diam. Aliquam
            erat volutpat. Proin elit ex, pretiu
          </p>
        </Description>
        <CardAbout>
          <CardInd>
            <h2>PENAWARAN</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tortor nisl, dapibus vitae tortor ut,
            </p>
          </CardInd>
          <CardInd>
            <h2>UPDATE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tortor nisl, dapibus vitae tortor ut,
            </p>
          </CardInd>
          <CardInd>
            <h2>SECURE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tortor nisl, dapibus vitae tortor ut,
            </p>
          </CardInd>
        </CardAbout>
      </AboutBlockhainsContainer>
    </AboutBlockhains>
  );
};

const AboutBlockhains = styled.div`
  margin-top: 76px;
  /* background-color: aquamarine; */
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 40px;
    color: black;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #0d3de5;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0d3de5;
    padding-top: 37px;
    /* background-color: red; */
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const AboutBlockhainsContainer = styled.div`
  background: url(${AboutBlockchainImage});
  background-size: 42%;
  background-repeat: no-repeat;
  min-height: 630px;
  /* background-color: green; */
`;

const Description = styled.div`
  width: 50%;
  margin-left: auto;
  margin-top: 40px;
  /* background-color: aliceblue; */
`;

const CardAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const CardInd = styled.div`
  flex-basis: 25%;
  padding: 40px 17px 36px 17px;
  background: #ffffff;
  box-shadow: 0px 10px 18px 3px rgba(227, 230, 237, 0.34);
  border-radius: 15px;
`;

export default AboutBlockchain;
