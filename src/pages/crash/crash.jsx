import React, { useState } from "react";
import "./crash.css";
import "../cases/cases.css";
import "../tower/tower.css";
import "../coinflip/coinflip.css";
import "../home-page/home-page.css";
import crash_user from "../../assets/images/user-avatar-4.png";
import { ReactComponent as CrashBG } from "./crash-bg.svg";
import { ReactComponent as CrashLimitedRoboxBG } from "../../assets/icons/limited-frame.svg";
import { ReactComponent as TimeoutIcon } from "../../assets/icons/timeout-icon.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as UserStatus } from "../../assets/icons/status-lvl-1.svg";
import HeaderTable from "../../components/header-table/header-table";
function Crash() {
  const [limitedMood, setLimitedMood] = useState(false);
  return (
    <>
      <div className="crash_page main_page_styles">
        <div className="crash_wrapper">
          <div className="left_crash_column">
            <div className="left_crash_top">
              <p className="main_p_style">Game #8572672</p>
              <div className="top_crash_lock">
                <LockIcon />
              </div>
            </div>
            <div className="crash_tabs">
              <button
                onClick={() => setLimitedMood(false)}
                className={
                  !limitedMood ? "crash_tab active_crash_tab" : "crash_tab"
                }
              >
                Robux
              </button>
              <button
                className={
                  limitedMood ? "crash_tab active_crash_tab" : "crash_tab"
                }
                onClick={() => setLimitedMood(true)}
              >
                Limited
              </button>
            </div>

            {!limitedMood ? (
              <>
                <div className="autocashout">
                  <div className="autocashout_wrapper">
                    <div className="df_aic_jcsb">
                      <div className="quick_case_opening">
                        <label class="switch">
                          <input type="checkbox" defaultChecked />
                          <span class="slider round"></span>
                        </label>
                        <p className="main_p_style">AUTOCASHOUT</p>
                      </div>
                      <div className="cashout_score">
                        <p>x2.0</p>
                      </div>
                    </div>
                    <div className="df_aic_jcsb">
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>10</p>
                        </div>
                      </div>
                      <button className="bet_btn">BET</button>
                    </div>
                  </div>
                  <div className="tower_input_increments">
                    <div className="input_increment">
                      <p>Min</p>
                    </div>
                    <div className="input_increment">
                      <p>+50</p>
                    </div>
                    <div className="input_increment">
                      <p>+100</p>
                    </div>

                    <div className="input_increment active_inc">
                      <p>+250</p>
                    </div>
                    <div className="input_increment">
                      <p>Max</p>
                    </div>
                  </div>
                </div>
                <div className="bets_total">
                  <div className="total_inv">
                    <div className="m_30">
                      <p className="main_p_style mb_custom">Bets</p>
                      <p className="main_p_style white">248</p>
                    </div>
                    <div className="vetical_gray_line"></div>

                    <div className="m_30">
                      <p className="main_p_style">Total value</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>
                            5 391<span>.68</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crash_players">
                  <div className="crash_players_title">
                    <p className="main_p_style">Player</p>
                    <p className="main_p_style">Bet</p>
                    <p className="main_p_style">Coeff</p>
                    <p className="main_p_style">Winning</p>
                  </div>
                  <div className="crash_players_list">
                    <div className="crash_players_list_item red_item">
                      <div className="player_block">
                        <img src={crash_user} alt="" />
                        <p className="main_p_style">Darlene</p>
                        <UserStatus />
                      </div>
                      <div className="nav_wallet_currency crash_bet_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>91</p>
                        </div>
                      </div>
                      <div className="coeff_block">
                        <p>4.15x</p>
                      </div>
                      <div className="nav_wallet_currency crash_winning_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>24</p>
                        </div>
                      </div>
                    </div>
                    <div className="crash_players_list_item green_item">
                      <div className="player_block">
                        <img src={crash_user} alt="" />
                        <p className="main_p_style">Darlene</p>
                        <UserStatus />
                      </div>
                      <div className="nav_wallet_currency crash_bet_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>91</p>
                        </div>
                      </div>
                      <div className="coeff_block">
                        <p>4.15x</p>
                      </div>
                      <div className="nav_wallet_currency crash_winning_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>24</p>
                        </div>
                      </div>
                    </div>
                    <div className="crash_players_list_item red_item">
                      <div className="player_block">
                        <img src={crash_user} alt="" />
                        <p className="main_p_style">Darlene</p>
                        <UserStatus />
                      </div>
                      <div className="nav_wallet_currency crash_bet_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>91</p>
                        </div>
                      </div>
                      <div className="coeff_block">
                        <p>4.15x</p>
                      </div>
                      <div className="nav_wallet_currency crash_winning_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>24</p>
                        </div>
                      </div>
                    </div>
                    <div className="crash_players_list_item">
                      <div className="player_block">
                        <img src={crash_user} alt="" />
                        <p className="main_p_style">Darlene</p>
                        <UserStatus />
                      </div>
                      <div className="nav_wallet_currency crash_bet_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>91</p>
                        </div>
                      </div>
                      <div className="coeff_block">
                        <span className="empty_span">-</span>
                      </div>
                      <div className="nav_wallet_currency crash_winning_block">
                        <span className="empty_span">-</span>
                      </div>
                    </div>
                    <div className="crash_players_list_item red_item">
                      <div className="player_block">
                        <img src={crash_user} alt="" />
                        <p className="main_p_style">Darlene</p>
                        <UserStatus />
                      </div>
                      <div className="nav_wallet_currency crash_bet_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>91</p>
                        </div>
                      </div>
                      <div className="coeff_block">
                        <p>4.15x</p>
                      </div>
                      <div className="nav_wallet_currency crash_winning_block">
                        <RsCurrencyLogo />
                        <div>
                          <p>24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="crash_limited_wrapper">
                <div className="df_aic_jcsb">
                  <div className="left_roblox">
                    <CrashLimitedRoboxBG className="left_robox_bg" />
                    <img src="" alt="" />
                     <p className="main_p_style">Egg of Shield</p>
                     <p className="main_p_style">Roblox item</p>
                  
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right_crash_column">
            <CrashBG className="crash_right_bg" />
            <div className="right_coefficient_blocks">
              <div className="coeff_block purple_coeff">
                <p>6.97x</p>
              </div>
              <div className="coeff_block orange_coeff">
                <p>10.12x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>5.00x</p>
              </div>
              <div className="coeff_block blue_coeff">
                <p>2.15x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>3.17x</p>
              </div>
              <div className="coeff_block orange_coeff">
                <p>22.12x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>2.15x</p>
              </div>
              <div className="coeff_block blue_coeff">
                <p>16.15x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>0.08x</p>
              </div>
              <div className="coeff_block blue_coeff">
                <p>4.19x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>4.15x</p>
              </div>
              <div className="coeff_block purple_coeff">
                <p>2.51x</p>
              </div>
              <div className="coeff_block blue_coeff">
                <p>6.66x</p>
              </div>
              <div className="coeff_block timeout_icon">
                <TimeoutIcon />
              </div>
            </div>
            <div className="right_score_crash">
              <p className="main_p_style">7.28x</p>
              <p className="main_p_style">6.17s</p>
              <p className="main_p_style">5.39x</p>
              <p className="main_p_style">4.97x</p>
              <p className="main_p_style">3.02x</p>
              <p className="main_p_style">2.25x</p>
              <p className="main_p_style">1.28x</p>
            </div>
            <div className="right_crash_center">
              <p>x16.10</p>
              <p>ROUND IS OVER</p>
            </div>
            <div className="right_bottom_time">
              <p className="main_p_style">2s</p>
              <p className="main_p_style">4s</p>
              <p className="main_p_style">6s</p>
              <p className="main_p_style">8s</p>
              <p className="main_p_style">10s</p>
              <p className="main_p_style">12s</p>
              <p className="main_p_style">14s</p>
              <p className="main_p_style">16s</p>
            </div>
          </div>
        </div>
      </div>

      {limitedMood || (
        <div className="pages_live_fee padding_0">
          <div className="page_title">
            <h1>Live feed</h1>
          </div>
          <div className="home_page_table">
            <div className="home_page_table_tabs">
              <button className="tabel_tab_btn active_tab_btn">All bets</button>
              <button className="tabel_tab_btn">High wins</button>
              <button className="tabel_tab_btn">Lucky wins</button>
            </div>
            <div className="header_table_content">
              <HeaderTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Crash;
