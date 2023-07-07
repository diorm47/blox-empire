import React, { useState } from "react";
import "../coinflip/coinflip.css";
import "./cases.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import limited_1 from "../../assets/images/limited/limited-1.png";
import limited_2 from "../../assets/images/limited/limited-2.png";
import limited_3 from "../../assets/images/limited/limited-3.png";
import limited_4 from "../../assets/images/limited/limited-4.png";
import limited_5 from "../../assets/images/limited/limited-5.png";
import limited_6 from "../../assets/images/limited/limited-6.png";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import equalizer_1 from "../../assets/images/cases-images/equalizer 1.png";
import equalizer_2 from "../../assets/images/cases-images/equalizer 2.png";
import equalizer_3 from "../../assets/images/cases-images/equalizer 3.png";
import equalizer_4 from "../../assets/images/cases-images/equalizer 4.png";
import equalizer_5 from "../../assets/images/cases-images/equalizer 5.png";
import equalizer_6 from "../../assets/images/cases-images/equalizer 6.png";

import coinflip_ava_1 from "../../assets/icons/coinflip-icons/coinflip-1.png";
import coinflip_ava_2 from "../../assets/icons/coinflip-icons/coinflip-2.png";
import coin_1 from "../../assets/images/roulette-carousel_items/coin-1.png";
import coin_2 from "../../assets/images/roulette-carousel_items/coin-2.png";
import { ReactComponent as CoinflipModal } from "../../assets/icons/coinflip_modal.svg";
import { NavLink } from "react-router-dom";

function Cases() {
  const [isModalActive, setActiveModal] = useState(false);
  const limited = [
    {
      id: 1,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_1,
      isSelected: false,
    },
    {
      id: 2,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_3,
      isSelected: true,
    },
    {
      id: 3,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_1,
      isSelected: false,
    },
    {
      id: 4,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_5,
      isSelected: false,
    },
    {
      id: 5,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_2,
      isSelected: true,
    },
    {
      id: 6,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: limited_4,
      isSelected: false,
    },
    {
      id: 7,
      description: "Catrin Dia de Muertos Mask",
      cost: 99,
      image: limited_6,
      isSelected: false,
    },
    {
      id: 8,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: limited_4,
      isSelected: false,
    },
  ];
  return (
    <>
      <div className="cases_page main_page_styles">
        <div className="coinflip_wrapper">
          <div className="custom_page_top">
            <div className="total_inv">
              <div className="m_30">
                <p className="main_p_style">Bets</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="vetical_gray_line"></div>
              <div className="m_30">
                <p className="main_p_style mb_custom">Battles</p>
                <p className="main_p_style white">2</p>
              </div>
            </div>
            <NavLink to="/create-case-battle">
              <input
                type="button"
                className="sign_submit_btn"
                value="Create case battle"
                // onClick={() => setActiveModal(true)}
              />
            </NavLink>
          </div>
          <div className="cases_list">
            <div className="cases_list_item">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div>
                  <img src={coinflip_ava_2} alt="" />
                  <p className="main_p_style">Marjorie</p>
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_1} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <img src={equalizer_3} alt="" />
                </div>
                <div>
                  <div className="unboxing_block">
                    <button>Unboxing...</button>
                  </div>

                  <img src={equalizer_4} alt="" />
                </div>
                <div>
                  <img src={equalizer_5} alt="" />
                </div>
                <div>
                  <img src={equalizer_6} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
              </div>
            </div>
            <div className="cases_list_item gray_transparent">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div>
                  <img src={coinflip_ava_2} alt="" />
                  <p className="main_p_style">Marjorie</p>
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_1} alt="" />
                </div>
                <div>
                  <div className="unboxing_block">
                    <button>Unboxing...</button>
                  </div>
                  <img src={equalizer_4} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <img src={equalizer_3} alt="" />
                </div>

                <div>
                  <img src={equalizer_5} alt="" />
                </div>
              </div>
            </div>
            <div className="cases_list_item ">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div>
                  <img src={coinflip_ava_2} alt="" />
                  <p className="main_p_style">Marjorie</p>
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_1} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <img src={equalizer_4} alt="" />
                </div>

                <div>
                  <img src={equalizer_5} alt="" />
                </div>
                <div>
                  <img src={equalizer_6} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <div className="unboxing_block">
                    <button>Unboxing...</button>
                  </div>

                  <img src={equalizer_3} alt="" />
                </div>
              </div>
            </div>
            <div className="cases_list_item gray_transparent">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <p>?</p>
                  </div>
                  <input
                    type="button"
                    className="sign_submit_btn"
                    value="Join game"
                    onClick={() => setActiveModal(true)}
                  />
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_6} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
              </div>
            </div>
            <div className="cases_list_item">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div>
                  <img src={coinflip_ava_2} alt="" />
                  <p className="main_p_style">Marjorie</p>
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_1} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <img src={equalizer_3} alt="" />
                </div>
                <div>
                  <div className="unboxing_block">
                    <button>Unboxing...</button>
                  </div>

                  <img src={equalizer_4} alt="" />
                </div>
                <div>
                  <img src={equalizer_5} alt="" />
                </div>
                <div>
                  <img src={equalizer_6} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
              </div>
            </div>
            <div className="cases_list_item gray_transparent">
              <div className="left_bet_scores">
                <div className="total_inv">
                  <div className="m_30">
                    <div className="nav_wallet_currency">
                      <RsCurrencyLogo />
                      <div>
                        <p>334</p>
                      </div>
                    </div>
                    <p className="main_p_style">Round 7 / 8</p>
                  </div>
                </div>
              </div>
              <div className="case_list_avatars">
                <div>
                  <img src={coinflip_ava_1} alt="" />
                  <p className="main_p_style">Soham</p>
                </div>
                <div>
                  <img src={coinflip_ava_2} alt="" />
                  <p className="main_p_style">Marjorie</p>
                </div>
              </div>
              <div className="cases_equalizers_list">
                <div>
                  <img src={equalizer_1} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
                <div>
                  <img src={equalizer_3} alt="" />
                </div>
                <div>
                  <div className="unboxing_block">
                    <button>Unboxing...</button>
                  </div>

                  <img src={equalizer_4} alt="" />
                </div>
                <div>
                  <img src={equalizer_5} alt="" />
                </div>
                <div>
                  <img src={equalizer_6} alt="" />
                </div>
                <div>
                  <img src={equalizer_2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isModalActive || (
        <div className="sign_in_modal coinflip_modal deposit_modal">
          <div className="modal_bg" onClick={() => setActiveModal(false)}></div>
          <div className="sign_in_wrapper modal_styles">
            <div className="coinflip_modal">
              <div className="block_nav crypto_curse">
                <div className="block_title crypto_curse">
                  <h2>Create Coinflip game</h2>
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
                <div className="modal_small_cards_template">
                  {limited.map((limit) => (
                    <div
                      key={limit.id}
                      className={
                        limit.isSelected
                          ? "card_item_selected modal_card_item"
                          : "modal_card_item"
                      }
                    >
                      <button
                        className={
                          limit.isSelected ? "card_item_selected_btn" : ""
                        }
                      ></button>
                      <div className="card_img_temp">
                        <img src={limit.image} alt={limit.image} />
                      </div>
                      <div className="temp_text">
                        <p>{limit.description}</p>
                      </div>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>{limit.cost}</p>
                        </div>
                      </div>
                      <Btm className="btm_shadow" />
                    </div>
                  ))}
                  <div className="modal_gradient">
                    <CoinflipModal />
                  </div>
                </div>
                <div className="selected_value_dep">
                  <input
                    onClick={() => setActiveModal(true)}
                    type="button"
                    className="sign_submit_btn"
                    value="Create game"
                  />
                  <div className="modal_coins">
                    <img src={coin_1} alt="" />
                    <img src={coin_2} alt="" />
                  </div>
                  <div className="total_inv">
                    <div className="m_30">
                      <p className="main_p_style mb_custom">Selected color</p>
                      <p className="main_p_style orange">Orange</p>
                    </div>
                    <div className="vetical_gray_line"></div>
                    <div className="m_30">
                      <p className="main_p_style mb_custom">Item</p>
                      <p className="main_p_style white">4</p>
                    </div>
                    <div className="vetical_gray_line"></div>
                    <div className="m_30">
                      <p className="main_p_style">Value</p>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p className="white">18 561</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cases;
