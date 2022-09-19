import React from "react";
import styled from "styled-components";

// Import component
import SideBarItem from "./SideBarItem";

// Import Icon
import myProperty from "../img/myProperty.svg";
import love from "../img/love.svg";
import transaksi from "../img/transaksi.svg";
import pengaturan from "../img/pengaturan.svg";
import logout from "../img/logout.svg";

const SideBar = ({ UserImage }) => {
  return (
    <SideBarContainer>
      <div className='container'>
        <div className='sideBarSection'>
          <div className='profile'>
            <img src={UserImage} alt='User Profile' />
            <div className='name'>Albert Fussels</div>
          </div>
          <hr />
          <div className='itemContainer'>
            <SideBarItem icon={myProperty} desc={`Properti Saya`} />
            <SideBarItem icon={love} desc={`Wishlist`} />
            <SideBarItem icon={transaksi} desc={`Daftar Transaksi`} />
            <SideBarItem icon={pengaturan} desc={`Pengaturan`} />
            <SideBarItem icon={logout} desc={`Keluar`} />
          </div>
        </div>
      </div>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 100%;
  left: 0px;
  background: rgba(28, 28, 28, 0.33);
  position: absolute;
  z-index: 3;
  .sideBarSection {
    width: 30%;
    background: white;
    margin-left: auto;
    margin-top: 10px;
    border-radius: 15px;
    padding: 25px 25px;
    .profile {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .itemContainer {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
`;

export default SideBar;
