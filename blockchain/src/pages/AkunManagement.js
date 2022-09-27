import React from "react";
import { useState } from "react";

import styled from "styled-components";

// Import Pages
import Login from "../components/Login";
import Register from "../components/Register";

import ImageLogin from "../img/motion.gif";

const AkunManagement = ({ setIsLogin, isLogin }) => {
  const [userRequest, setUserRequest] = useState("masuk");
  // console.log(pathName);
  return (
    <AkunStyled className='container'>
      <LeftSection>
        <img src={ImageLogin} alt='Login Preview' />
      </LeftSection>
      <RightSection>
        {userRequest === "masuk" ? (
          <Login
            userRequest={userRequest}
            setUserRequest={setUserRequest}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          />
        ) : (
          <Register userRequest={userRequest} setUserRequest={setUserRequest} />
        )}
      </RightSection>
    </AkunStyled>
  );
};

const AkunStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const LeftSection = styled.div`
  width: 67%;
  img {
    width: 100%;
  }
`;

const RightSection = styled.div`
  width: 33%;
`;

export default AkunManagement;
