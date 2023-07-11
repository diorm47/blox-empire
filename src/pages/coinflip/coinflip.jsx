import React, { useState } from "react";
import "./coinflip.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import limited_1 from "../../assets/images/limited/limited-1.png";
import limited_2 from "../../assets/images/limited/limited-2.png";
import limited_3 from "../../assets/images/limited/limited-3.png";
import limited_4 from "../../assets/images/limited/limited-4.png";
import limited_5 from "../../assets/images/limited/limited-5.png";
import limited_6 from "../../assets/images/limited/limited-6.png";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";

import coinflip_ava_1 from "../../assets/icons/coinflip-icons/coinflip-1.png";
import coinflip_ava_2 from "../../assets/icons/coinflip-icons/coinflip-2.png";
import coin_1 from "../../assets/images/roulette-carousel_items/coin-1.png";
import coin_2 from "../../assets/images/roulette-carousel_items/coin-2.png";
import { ReactComponent as CoinflipStatus1 } from "../../assets/icons/coinflip-icons/coinflip-status-1.svg";
import { ReactComponent as CoinflipStatus2 } from "../../assets/icons/coinflip-icons/coinflip-status-2.svg";
import { ReactComponent as CoinflipModal } from "../../assets/icons/coinflip_modal.svg";
function Coinflip() {
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
      <div className="coinflip_page main_page_styles">
        <div className="coinflip_wrapper">
          <div className="custom_page_top">
            <div className="total_inv">
              <div className="m_30">
                <p className="main_p_style">Total value</p>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="vetical_gray_line"></div>
              <div className="m_30">
                <p className="main_p_style mb_custom">Selected</p>
                <p className="main_p_style white">2</p>
              </div>
              <div className="vetical_gray_line"></div>
              <div className="m_30">
                <p className="main_p_style mb_custom">Joinable</p>
                <p className="main_p_style white">1</p>
              </div>
            </div>
            <input
              type="button"
              className="sign_submit_btn"
              value="Create game"
              onClick={() => setActiveModal(true)}
            />
          </div>
          <div className="coinflip_list">
            <div className="coinflip_list_item active_list">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">You</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <p className="main_p_style">+4</p>
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">Wuppertal</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">Herne</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <p className="main_p_style">+4</p>
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
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
              <div className="coin_block">
                
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
                <p className="main_p_style">R$ 18.7K - R$ 22.08K</p>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">You</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <p className="main_p_style">+4</p>
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">Wuppertal</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">Herne</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">Avellaneda</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_2} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">You</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <p className="main_p_style">+4</p>
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">Wuppertal</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">Herne</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_1} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <p className="main_p_style">+4</p>
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
            <div className="coinflip_list_item">
              <div className="left_coinflip_profiles">
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_1} alt="" />
                    <CoinflipStatus1 />
                  </div>
                  <p className="main_p_style green">You</p>
                </div>
                <div className="vs_block">
                  <p>VS</p>
                </div>
                <div className="cpinflip_avatar_block w_140px">
                  <div className="coinflip_avatar">
                    <img src={coinflip_ava_2} alt="" />
                    <CoinflipStatus2 />
                  </div>
                  <p className="main_p_style">Avellaneda</p>
                </div>
              </div>
              <div className="coin_block">
                <img src={coin_2} alt="" />
              </div>
              <div className="coinflip_currencies_block">
                <div className="coinflip_currencies">
                  <div className="coinflip_currency_block">
                    <img src={limited_1} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_2} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_3} alt="" />
                  </div>
                  <div className="coinflip_currency_block">
                    <img src={limited_4} alt="" />
                  </div>
                </div>
              </div>

              <div className="right_cost_block">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles green">
                    {new Intl.NumberFormat("ru-RU").format(1561)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isModalActive || (
        <div className="sign_in_modal coinflip_modal deposit_modal coinflip_modal_block">
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
                  <div className="modal_coins line_d_n">
                    <img src={coin_1} alt="" />
                    <img src={coin_2} alt="" />
                  </div>
                  <div className="total_inv">
                 
                    <div className="m_30">
                      <p className="main_p_style mb_custom">Selected color</p>
                      <p className="main_p_style orange">Orange</p>
                    </div>
                    <div className="vetical_gray_line line_d_n"></div>
                    <div className="modal_coins desc_dn">
                    <img src={coin_1} alt="" />
                    <img src={coin_2} alt="" />
                  </div>
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

export default Coinflip;
