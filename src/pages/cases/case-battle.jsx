import React from "react";
import "../coinflip/coinflip.css";
import "./case-battle.css";
import "./cases.css";
import "../profile/profile.css";
import cases_card_img_1 from "../../assets/icons/cases-battle/case-battle-1.png";
import cases_card_img_2 from "../../assets/icons/cases-battle/case-battle-2.png";
import cases_card_img_3 from "../../assets/icons/cases-battle/case-battle-3.png";
import cases_card_img_4 from "../../assets/icons/cases-battle/case-battle-4.png";
import center from "../../assets/icons/cases-battle/center-img.png";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";

import { NavLink } from "react-router-dom";
import { ReactComponent as LeftChev } from "../../assets/icons/arrow left.svg";
import { ReactComponent as Top } from "../../assets/icons/cases-battle/top-svg-count.svg";
import { ReactComponent as Bottom } from "../../assets/icons/cases-battle/bottom-svg-count.svg";
import user_avatar_img from "../../assets/images/user-avatar.png";

function CaseBattle() {
  return (
    <div className="create_case_battle_page main_page_styles">
      <div className="coinflip_wrapper">
        <NavLink to="/create-case-battle">
          <div className="left_last_button">
            <div>
              <LeftChev />
            </div>
            <p className="main_p_style">Case battle</p>
          </div>
        </NavLink>
        <div className="case_battle_top_rounds">
          <div className="left_top_wrapper">
            <div className="top_profile_items">
              <NavLink to="/profile">
                <div className="profile_avatar">
                  <img src={user_avatar_img} alt="user avatar" />
                </div>
              </NavLink>
              <div className="user_name_wallet">
                <div>
                  <p className="main_p_style">Avellaneda</p>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>15 000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="case_battle_top_round">
              <Top className="cases_card_top" />
              <div className="cases_battle_card">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <Bottom className="cases_card_bottom" />
            </div>
          </div>

          <img src={center} alt="" />
          <div className="left_top_wrapper right_top_wrapper">
            <div className="top_profile_items">
              <NavLink to="/profile">
                <div className="profile_avatar">
                  <img src={user_avatar_img} alt="user avatar" />
                </div>
              </NavLink>
              <div className="user_name_wallet">
                <div>
                  <p className="main_p_style">Avellaneda</p>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>15 000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="case_battle_top_round">
              <Top className="cases_card_top" />
              <div className="cases_battle_card">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="cases_battle_card">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Shinestone Shades...</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <Bottom className="cases_card_bottom" />
            </div>
          </div>
        </div>
        <div className="case_battle_wining_wrapper">
          <div className="case_battle_wining wining_left">
            <div className="top_case_battle_scores">
              <p className="main_p_style white">Your winnings</p>
              <div className="winning_percents">
                <div className="win_1">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_2">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_3">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_4">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_5">
                  <div></div>
                  <p>80%</p>
                </div>
              </div>
            </div>
            <div className="winning_content_wrapper">
              <div className="winning_content">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case_battle_wining wining_right">
            <div className="top_case_battle_scores">
              <p className="main_p_style white">Opponent’s winnings</p>
              <div className="winning_percents">
                <div className="win_1">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_2">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_3">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_4">
                  <div></div>
                  <p>80%</p>
                </div>
                <div className="win_5">
                  <div></div>
                  <p>80%</p>
                </div>
              </div>
            </div>
            <div className="winning_content_wrapper">
              <div className="winning_content">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_1} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_3} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_2} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="winning_content">
                <img src={cases_card_img_4} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseBattle;
