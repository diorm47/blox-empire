import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../components/nav-bar/navbar.css";
import "../../pages/home-page/home-page.css";
import "./profile.css";

import { ReactComponent as WalletIcon } from "../../assets/icons/wallet-icon.svg";
import { ReactComponent as Status1 } from "../../assets/icons/status-lvl-1.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout-icon.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import user_avatar_img from "../../assets/images/user-avatar.png";
import ProfileTable from "../../components/profile-table/profile-table";
import Logout from "../../components/modal/modal";

function Profile({ toggleDeposit }) {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [tableType, setTableType] = useState("history");
  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="profile_page main_page_styles">
        <div className="page_title">
        <LeftIcon onClick={goBack}/>
          <h1>Profile</h1>
        </div>
        <div className="profile_wrapper">
          <div className="left_profile">
            <div className="top_profile_items">
              <NavLink to="/profile">
                <div className="profile_avatar">
                  <Status1 />
                  <img src={user_avatar_img} alt="user avatar" />
                </div>
              </NavLink>
              <div className="user_name_wallet">
                <div className="user_name">
                  <p>Messai</p>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>
                      5 391<span>.68</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="logout_icon" onClick={toggleLogoutModal}>
                <LogoutIcon />
              </div>
            </div>
            <div className="profile_wallets">
              <div className="nav_wallet_actions">
                <div onClick={toggleDeposit}>
                  <WalletIcon />
                  <p>Deposit</p>
                </div>
                <NavLink to="/withdraw">
                  <div className="nav_withdraw">
                    <p>Withdraw</p>
                  </div>
                </NavLink>
              </div>
              <div className="user_conf_datas">
                <p className="main_p_style">Registered on June 25 2022</p>
                <p className="main_p_style">UID: 36147586390</p>
                <div className="block_separator"></div>
              </div>
              <div className="user_game_satists">
                <div className="stat_item">
                  <p className="main_p_style">Games played</p>
                  <div className="nav_wallet_currency">
                    <div>
                      <p>253</p>
                    </div>
                  </div>
                </div>
                <div className="stat_item">
                  <p className="main_p_style">Games won</p>
                  <div className="nav_wallet_currency">
                    <div>
                      <p>183</p>
                    </div>
                  </div>
                </div>
                <div className="stat_item">
                  <p className="main_p_style">Total deposited</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>5 237</p>
                    </div>
                  </div>
                </div>
                <div className="stat_item">
                  <p className="main_p_style">Total deposited</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>102 900</p>
                    </div>
                  </div>
                </div>
                <div className="stat_item">
                  <p className="main_p_style">Total wagered</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>102 900</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_profile_table">
            <div className="home_page_table_tabs">
              <button
                onClick={() => setTableType("history")}
                className={
                  tableType === "history"
                    ? "tabel_tab_btn active_tab_btn"
                    : "tabel_tab_btn"
                }
              >
                History
              </button>
              <button
                onClick={() => setTableType("deposits")}
                className={
                  tableType === "deposits"
                    ? "tabel_tab_btn active_tab_btn"
                    : "tabel_tab_btn"
                }
              >
                Deposits
              </button>
              <NavLink to="/withdraw">
                <button className="tabel_tab_btn">Withdraws</button>
              </NavLink>
              <button
                onClick={() => setTableType("limiteds")}
                className={
                  tableType === "limiteds"
                    ? "tabel_tab_btn active_tab_btn"
                    : "tabel_tab_btn"
                }
              >
                Limiteds
              </button>
            </div>
            <div className="header_table_content">
              <ProfileTable tableType={tableType} />
            </div>
          </div>
        </div>
      </div>

      {!isLogoutModalVisible || (
        <Logout toggleLogoutModal={toggleLogoutModal} />
      )}
    </>
  );
}

export default Profile;
