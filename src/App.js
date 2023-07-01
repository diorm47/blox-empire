import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import HomePage from "./pages/home-page/home-page";

import { ReactComponent as ChatIcon } from "./assets/icons/chat-icon.svg";
import ChatMenu from "./components/chat-menu/chat-menu";
import SignIn from "./components/sign-in/sign-in";
import Deposit from "./components/deposit/deposit";
import Faq from "./pages/faq/faq";
import Earn from "./pages/earn/earn";
import Profile from "./pages/profile/profile";
import Affilitates from "./pages/affiliates/affliates";

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDepositeVisible, setDepositeModalVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleDeposit = () => {
    setDepositeModalVisible(!isDepositeVisible);
  };
  return (
    <>
      <div className="main_wrapper">
        <Navbar toggleModal={toggleModal} toggleDeposit={toggleDeposit} />
        <div className="main_content">
          <Sidebar />
          <div className="main_content_wrapper">
            <div
              className={
                isMenuVisible
                  ? "main_content_block"
                  : "main_content_block m_content_center"
              }
            >
              <Routes>
                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/affiliates" element={<Affilitates />} />
                <Route
                  path="/profile"
                  element={<Profile toggleDeposit={toggleDeposit} />}
                />
              </Routes>
            </div>
            <div className="chat_content">
              <div className="chat_button" onClick={toggleMenu}>
                <ChatIcon />
              </div>
              <div
                className={`menu-container ${isMenuVisible ? "visible" : ""}`}
              >
                <ChatMenu toggleMenu={toggleMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isModalVisible || <SignIn toggleModal={toggleModal} />}
      {!isDepositeVisible || <Deposit toggleDeposit={toggleDeposit} />}
    </>
  );
}

export default App;
