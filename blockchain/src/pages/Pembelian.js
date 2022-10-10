import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";

const Pembelian = () => {
  return (
    <div className="container">
      <Breadcrumb
        BreadcrumbText={`Home / Properti / Rumah / Beli / Pembelian`}
      />
      <HeaderText
        TitleText={`Pembelian`}
        DescriptionText={`Silahkan mengisi form dengan benar`}
      ></HeaderText>
      <div className="bodyContainer">

      </div>
    </div>
  );
};

export default Pembelian;
