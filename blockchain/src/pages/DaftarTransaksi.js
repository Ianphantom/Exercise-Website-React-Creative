import React from "react";

import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";
import TransaksiItem from "../components/TransaksiItem";

import Home2 from "../img/house2.png";
import Home1 from "../img/house1.png";

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
        <TransaksiItem
          namaRumah={`Rumah Pakuwon Adora`}
          pemilik={`Pak Muh`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          toilet={`2`}
          kamar={`2`}
          luas={`1400`}
          harga={`850.000.000`}
          status={`menunggu`}
          tanggal={`28 Juli 2022`}
          idTransaksi={`ID/01001`}
          gambarRumah={Home2}
        />
        <TransaksiItem
          namaRumah={`Rumah Kemang`}
          pemilik={`Pak Muh`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          toilet={`2`}
          kamar={`2`}
          luas={`1400`}
          harga={`850.000.000`}
          status={`true`}
          tanggal={`28 Juli 2022`}
          idTransaksi={`ID/01001`}
          gambarRumah={Home2}
        />
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
