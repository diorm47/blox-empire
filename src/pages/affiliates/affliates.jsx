import React from "react";
import "../../components/nav-bar/navbar.css";
import "../../pages/home-page/home-page.css";
import "../profile/profile.css";
import "./affliates.css";

import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";

import { ReactComponent as CopyIcon } from "../../assets/icons/copy-icon.svg";
import { ReactComponent as PenIcon } from "../../assets/icons/pen-icon.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import AffliateTable from "../../components/affliate-table/afflite-table";
import HeaderTable from "../../components/header-table/header-table";

function Affilitates() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="profile_page main_page_styles affiliates_page">
      <div className="page_title" >
        <LeftIcon onClick={goBack}/>
        <h1>Affiliates</h1>
      </div>
      <div className="profile_wrapper">
        <div className="left_profile">
          <div className="user_game_satists">
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
              <p className="main_p_style">Affiliates balance</p>
              <div className="nav_wallet_currency">
                <RsCurrencyLogo />
                <div>
                  <p>253</p>
                </div>
              </div>
            </div>
            <div className="stat_item">
              <p className="main_p_style">Total earned</p>
              <div className="nav_wallet_currency">
                <RsCurrencyLogo />
                <div>
                  <p>183</p>
                </div>
              </div>
            </div>
            <div className="stat_item">
              <p className="main_p_style">Affiliated users</p>
              <div className="nav_wallet_currency">
                <div>
                  <p>4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="affliated_block">
            <p className="main_p_style">Your affiliated code</p>
            <div>
              <input disabled type="text" value="Messai23" />
              <PenIcon />
            </div>
          </div>
          <div className="affliated_block">
            <p className="main_p_style">Your affiliate link</p>
            <div>
              <input
                disabled
                type="text"
                value="https://bloxempire.com/a/Messai23"
              />
              <CopyIcon />
            </div>
          </div>
        </div>
        <div className="right_profile_table">
          <div className="header_table_content">
            <div className="desktop_table">
              <AffliateTable />
            </div>
            <div className="mob_aff_table">
              <HeaderTable className="mob_aff_table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affilitates;
