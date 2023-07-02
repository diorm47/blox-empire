import React, { useState } from "react";
import { ReactComponent as RightChevron } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "../sign-in/sign-in.css";
import "../deposit/deposit.css";
import "./withdraw.css";

import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import limited_img from "../../assets/images/deposit-cart-images/limeted-cart.jpg";
import robux_img from "../../assets/images/deposit-cart-images/robux-cart.jpg";
import limited_1 from "../../assets/images/limited/limited-1.png";
import { NavLink } from "react-router-dom";

function WithDrawModal({ toggleWithDraw }) {
  const [activeModalType, setActiveModalType] = useState("withdraw");
  const limited = [
    {
      id: 1,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: limited_1,
      isSelected: false,
    },
  ];
  return (
    <div className="sign_in_modal deposit_modal">
      <div className="modal_bg" onClick={toggleWithDraw}></div>

      <div className="sign_in_wrapper modal_styles">
        {activeModalType === "withdraw" ? (
          <>
            <div className="page_title">
              <h1>Withdraw</h1>
              <div onClick={toggleWithDraw}>
                <CloseIcon />
              </div>
            </div>
            <div className="deposit_modal_block crypto_block">
              <NavLink to="/withdraw">
                <div
                  className="deposit_modal_item"
                  onClick={toggleWithDraw}
                  // onClick={() => setActiveModalType("withdraw_limiteds")}
                >
                  <img src={limited_img} alt="Limiteds" />
                </div>
              </NavLink>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("withdraw_robux")}
              >
                <img src={robux_img} alt="Robux" />
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {activeModalType === "withdraw_robux" ? (
          <>
            <div className="block_nav crypto_curse ">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("withdraw")}>Withdraw </p>
                <div>
                  <RightChevron />
                  <p className="active_link">Robux</p>
                </div>
              </div>
              <div className="close_icon" onClick={toggleWithDraw}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2>Withdraw Robux</h2>
            </div>
            <div className="deposit_modal_block crypto_block withdraw_robux limited_main">
              <div className="limited_value_block">
                <div className="limited_right_bar width_580px">
                  <p>
                    Please specify the amount of Robux you would like to
                    withdraw. <br /> Please keep in mind that ROBLOX imposes a
                    30% marketplace fee on all withdraws.
                  </p>
                  <p className="mt_12px">Ammount of Robux</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div className="robux_input_increments">
                      <div className="input_increment">
                        <p>+50</p>
                      </div>
                      <div className="input_increment">
                        <p>+100</p>
                      </div>
                      <div className="input_increment active_increment">
                        <p>+250</p>
                      </div>
                      <div className="input_increment">
                        <p>Max</p>
                      </div>
                    </div>
                    <input
                      type="text"
                      defaultValue={1000}
                      className="modal_input_template"
                    />
                  </div>

                  <input
                    type="button"
                    className="sign_submit_btn"
                    value="DEPOSIT ROBUX"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {activeModalType === "withdraw_limiteds" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("withdraw")}>Withdraw </p>
                <div>
                  <RightChevron />
                  <p onClick={() => setActiveModalType("limited")}>Limited</p>
                </div>
                <div>
                  <RightChevron />
                  <p className="active_link">Item Value</p>
                </div>
              </div>
              <div className="close_icon" onClick={toggleWithDraw}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2>Deposit Limiteds</h2>
            </div>
            <div className="deposit_modal_block crypto_block limited_main">
              <div className="limited_value_block">
                <div className="modal_card_item">
                  <div className="card_img_temp">
                    <img src={limited[0].image} alt={limited[0].image} />
                  </div>
                  <div className="temp_text">
                    <p>Catrin Dia de Muertos Mask</p>
                  </div>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>199</p>
                    </div>
                  </div>
                  <Btm className="btm_shadow" />
                </div>

                <div className="limited_right_bar">
                  <p className="limited_top_text">
                    Please specify the R$ price for this item:
                  </p>
                  <p>Ammount of Robux</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />

                    <input type="text" className="modal_input_template" />
                  </div>

                  <input
                    type="button"
                    className="sign_submit_btn"
                    value="LIST ITEM"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WithDrawModal;
