import React, { Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import { ReactComponent as ChatIcon } from "./assets/icons/chat-icon.svg";
import { ReactComponent as MenuIcon } from "./assets/icons/mobile-nav-icons/menu.svg";
import { ReactComponent as HomeIcon } from "./assets/logos/nav-icons/home.svg";
import { ReactComponent as InverntoryIcon } from "./assets/icons/mobile-nav-icons/inventory.svg";
import { ReactComponent as ChatMobileIcon } from "./assets/icons/mobile-nav-icons/chat.svg";
import ChatMenu from "./components/chat-menu/chat-menu";
import Deposit from "./components/deposit/deposit";
import SignIn from "./components/sign-in/sign-in";
import WithDrawModal from "./components/withdraw-modal/withdraw-modal";
import Loader from "./pages/loading/loading";

const CreateCaseBattle = React.lazy(() =>
  import("./pages/cases/create-case-battle")
);
const CaseBattle = React.lazy(() => import("./pages/cases/case-battle"));
const Upgrade = React.lazy(() => import("./pages/upgrade/upgrade"));
const Crash = React.lazy(() => import("./pages/crash/crash"));
const Cases = React.lazy(() => import("./pages/cases/cases"));
const Coinflip = React.lazy(() => import("./pages/coinflip/coinflip"));
const Mines = React.lazy(() => import("./pages/mines/mines"));
const Roulette = React.lazy(() => import("./pages/roulette-game/roulette"));
const Tower = React.lazy(() => import("./pages/tower/tower"));

const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const Withdraw = React.lazy(() => import("./pages/withdraw/withdraw"));

const Faq = React.lazy(() => import("./pages/faq/faq"));
const Earn = React.lazy(() => import("./pages/earn/earn"));
const Profile = React.lazy(() => import("./pages/profile/profile"));
const Affilitates = React.lazy(() => import("./pages/affiliates/affliates"));
const Rewards = React.lazy(() => import("./pages/rewards/rewards"));
const Inventory = React.lazy(() => import("./pages/inventory/inventory"));
const Plinko = React.lazy(() => import("./pages/plinko/plinko"));

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isMobMenuVisible, setMobMenuVisible] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isWithDrawVisible, setWithDrawVisible] = useState(false);
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
  const toggleWithDraw = () => {
    setWithDrawVisible(!isWithDrawVisible);
  };

  return (
    <>
      <div className="main_wrapper">
        <Navbar
          toggleModal={toggleModal}
          toggleDeposit={toggleDeposit}
          toggleWithDraw={toggleWithDraw}
          isMobMenuVisible={isMobMenuVisible}
        
        />
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
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Navigate to={"/home"} />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/earn" element={<Earn />} />
                  <Route path="/affiliates" element={<Affilitates />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/crash" element={<Crash />} />
                  <Route path="/upgrade" element={<Upgrade />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/case-battle" element={<CaseBattle />} />
                  <Route
                    path="/create-case-battle"
                    element={<CreateCaseBattle />}
                  />
                  <Route path="/roulette" element={<Roulette />} />
                  <Route path="/cases" element={<Cases />} />
                  <Route path="/coinflip" element={<Coinflip />} />
                  <Route
                    path="/plinko"
                    element={<Plinko isMenuVisible={isMenuVisible} />}
                  />
                  <Route
                    path="/mines"
                    element={<Mines isMenuVisible={isMenuVisible} />}
                  />
                  <Route
                    path="/tower"
                    element={<Tower isMenuVisible={isMenuVisible} />}
                  />
                  <Route
                    path="/profile"
                    element={<Profile toggleDeposit={toggleDeposit} />}
                  />
                </Routes>
              </Suspense>
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
      {!isWithDrawVisible || <WithDrawModal toggleWithDraw={toggleWithDraw} />}

      <div className="mobile_bottom_navigation">
        <div
          className={
            isMobMenuVisible
              ? "bottom_nav_item active_mob_menu"
              : "bottom_nav_item"
          }
        >
          <div
            className="bottom_nav_item_icon"
            onClick={() => setMobMenuVisible(!isMobMenuVisible)}
          >
            <MenuIcon />
          </div>
          <p>menu</p>
        </div>
        <div className="bottom_nav_item">
          <div className="bottom_nav_item_icon mobile_home_svg">
            <HomeIcon />
          </div>
          <p>HOME</p>
        </div>
        <div className="bottom_nav_item">
          <div className="bottom_nav_item_icon">
            <InverntoryIcon />
          </div>
          <p>inventory</p>
        </div>
        <div className="bottom_nav_item">
          <div className="bottom_nav_item_icon" onClick={toggleMenu}>
            <ChatMobileIcon />
          </div>
          <p>CHAT</p>
        </div>
      </div>
    </>
  );
}

export default App;
