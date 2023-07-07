import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as ModalBG } from "../../assets/icons/cc_modal_gradient.svg";
import equalizer_1 from "../../assets/images/cases-images/equalizer 1.png";
import equalizer_2 from "../../assets/images/cases-images/equalizer 2.png";
import equalizer_3 from "../../assets/images/cases-images/equalizer 3.png";
import equalizer_4 from "../../assets/images/cases-images/equalizer 4.png";
import equalizer_5 from "../../assets/images/cases-images/equalizer 5.png";
import "../coinflip/coinflip.css";
import "./cases.css";

import { NavLink } from "react-router-dom";
import { ReactComponent as LeftChev } from "../../assets/icons/arrow left.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

function CreateCaseBattle() {
  const [isModalActive, setActiveModal] = useState(false);

  return (
    <>
      <div className="create_case_battle_page main_page_styles">
        <div className="coinflip_wrapper">
          <NavLink to="/cases">
            <div className="left_last_button">
              <div>
                <LeftChev />
              </div>
              <p className="main_p_style">Create case battle</p>
            </div>
          </NavLink>
          <div className="custom_page_top">
            <div className="total_inv">
              <div className="m_30">
                <p className="main_p_style">Total ammount</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>18 561</p>
                  </div>
                </div>
              </div>
              <div className="vetical_gray_line"></div>
              <div className="m_30">
                <p className="main_p_style mb_custom">Cases</p>
                <p className="main_p_style white">13</p>
              </div>
            </div>

            <div className="create_c_right_top">
              <div className="player_numbers">
                <p className="main_p_style">Player</p>
                <div>
                  <p>2</p>
                </div>
                <div>
                  <p>3</p>
                </div>
                <div>
                  <p>4</p>
                </div>
                <div>
                  <p>8</p>
                </div>
              </div>
              <div className="vetical_gray_line"></div>
              <div className="quick_case_opening">
                <label class="switch">
                  <input type="checkbox" defaultChecked />
                  <span class="slider round"></span>
                </label>
                <p className="main_p_style">Quick case openning</p>
              </div>
              <NavLink to="/case-battle">
                <input
                  type="button"
                  className="sign_submit_btn"
                  value="Start battle"
                />
              </NavLink>
            </div>
          </div>

          <div className="create_case_battle_cards">
            <div className="case_battle_card">
              <div className="trash_icon">
                <TrashIcon />
              </div>
              <div className="equalizer_case">
                <img src={equalizer_1} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>167</p>
                  </div>
                </div>
              </div>
              <div className="horizondal_gray_line"></div>
              <div className="card_counters">
                <div>
                  <span>-</span>
                </div>
                <p>01</p>
                <div>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="case_battle_card">
              <div className="trash_icon">
                <TrashIcon />
              </div>
              <div className="equalizer_case">
                <img src={equalizer_2} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>167</p>
                  </div>
                </div>
              </div>
              <div className="horizondal_gray_line"></div>
              <div className="card_counters">
                <div>
                  <span>-</span>
                </div>
                <p>01</p>
                <div>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="case_battle_card">
              <div className="trash_icon">
                <TrashIcon />
              </div>
              <div className="equalizer_case">
                <img src={equalizer_3} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>167</p>
                  </div>
                </div>
              </div>
              <div className="horizondal_gray_line"></div>
              <div className="card_counters">
                <div>
                  <span>-</span>
                </div>
                <p>01</p>
                <div>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="case_battle_card">
              <div className="trash_icon">
                <TrashIcon />
              </div>
              <div className="equalizer_case">
                <img src={equalizer_4} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>167</p>
                  </div>
                </div>
              </div>
              <div className="horizondal_gray_line"></div>
              <div className="card_counters">
                <div>
                  <span>-</span>
                </div>
                <p>01</p>
                <div>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="case_battle_card">
              <div className="trash_icon">
                <TrashIcon />
              </div>
              <div className="equalizer_case">
                <img src={equalizer_5} alt="" />
                <p className="main_p_style">Antler case</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>167</p>
                  </div>
                </div>
              </div>
              <div className="horizondal_gray_line"></div>
              <div className="card_counters">
                <div>
                  <span>-</span>
                </div>
                <p>01</p>
                <div>
                  <span>+</span>
                </div>
              </div>
            </div>

            <div
              className="case_battle_card add_case_btn"
              onClick={() => setActiveModal(true)}
            >
              <div>
                <h1>+</h1>
                <p className="main_p_style">Add a case</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isModalActive || (
        <div className="sign_in_modal">
          <div className="modal_bg" onClick={() => setActiveModal(false)}></div>
          <div className="sign_in_wrapper modal_styles cr_c_modal_stles">
            <div className="coinflip_modal">
              <div className="block_nav crypto_curse">
                <div className="block_title crypto_curse">
                  <h2>Add case to a battle</h2>
                </div>
                <div
                  className="close_icon"
                  onClick={() => setActiveModal(false)}
                >
                  <CloseIcon />
                </div>
              </div>

              <div className="deposit_modal_block crypto_block limited_main">
                <input
                  type="text"
                  placeholder="Search name of the Robox item"
                  className="modal_input_template"
                />
                <div className="modal_small_cards_template create_case_modal">
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_1} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_2} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_3} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_4} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_5} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_1} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_2} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case_battle_card">
                    <div className="equalizer_case">
                      <img src={equalizer_3} alt="" />
                      <p className="main_p_style">Antler case</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>167</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ModalBG className="cc_m_gradient" />
                </div>
                <div className="case_added_btn">
                  <span>+</span>
                  <p>Case added</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateCaseBattle;
