// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Import React Router Dom
import { Routes, Route } from "react-router-dom";

// Header Import
import Header from "./components/Header";
// Footer Import
import Footer from "./components/Footer";

// Import Pages
import AkunManagement from "./pages/AkunManagement";
import Beranda from "./pages/Beranda";
import Tokenisasi from "./pages/Tokenisasi";
import Properti from "./pages/Properti";
import DetailProperty from "./pages/DetailProperty";
import PenjadwalanForm from "./pages/PenjadwalanForm";
import PenjadwalanSelesai from "./pages/PenjadwalanSelesai";
import Tour from "./pages/Tour";
import ChatButton from "./components/ChatButton";
import { useState } from "react";

function App() {
  const getToken = () => {
    const userToken = localStorage.getItem("token");

    if (userToken != null) return userToken;

    return false;
  };
  const [isLogin, setIsLogin] = useState(getToken());
  return (
    <div className='App'>
      <GlobalStyle />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} getToken={getToken} />
      <Routes>
        <Route
          exact
          path='/masuk'
          element={<AkunManagement isLogin={isLogin} setIsLogin={setIsLogin} />}
        />

        <Route exact path='/' element={<Beranda />} />
        <Route exact path='/tokenisasi' element={<Tokenisasi />} />
        <Route exact path='/properti' element={<Properti />} />
        <Route exact path='/detailproperti' element={<DetailProperty />} />
        <Route exact path='/penjadwalan' element={<PenjadwalanForm />} />
        <Route exact path='/tour' element={<Tour />} />
        <Route
          exact
          path='/penjadwalanberhasil'
          element={<PenjadwalanSelesai />}
        />
      </Routes>
      {isLogin && <ChatButton />}
      <Footer />
    </div>
  );
}

export default App;