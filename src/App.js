import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import HomePage from "./pages/home-page/home-page";

import { ReactComponent as ChatIcon } from "./assets/icons/chat-icon.svg";
import ChatMenu from "./components/chat-menu/chat-menu";

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div className="main_wrapper">
      <Navbar />
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
            </Routes>
          </div>
          <div className="chat_content">
            <div className="chat_button" onClick={toggleMenu}>
              <ChatIcon />
            </div>
            <div className={`menu-container ${isMenuVisible ? "visible" : ""}`}>
              <ChatMenu toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
