import React from "react";

import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";
import TransaksiItem from "../components/TransaksiItem";

const DaftarTransaksi = () => {
  return (
    <TransaksiStyled className='container'>
      <Breadcrumb
        BreadcrumbText={`Home / Properti / Rumah / Beli / Daftar Transaksi`}
      />
      <HeaderText
        TitleText={`Daftar Transaksi`}
        DescriptionText={`Berikut adalah semua daftar transaksi yang anda miliki`}
      ></HeaderText>
      <div className='transaksiContainer'>
        <div className='filterTransaksi'>
          <input
            type='text'
            name='cari'
            id='cari'
            placeholder='Cari Daftar Transaksi'
          />
          <input type='date' name='tanggal' id='tanggal' />
        </div>
        <TransaksiItem />
      </div>
    </TransaksiStyled>
  );
};

const TransaksiStyled = styled.div`
  .transaksiContainer {
    margin-top: 20px;
    padding: 30px 30px;
    background: #ffffff;
    border: 1px solid #fdfdfd;
    border-radius: 15px;
    box-shadow: 0px 6px 10px #ddebff;
    .filterTransaksi {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;

      input {
        width: 50%;
        padding: 10px 20px;
        border: 1px solid #d9d9e3;
        border-radius: 15px;
      }
    }
  }
`;

export default DaftarTransaksi;
