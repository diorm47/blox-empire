import React, { useState } from "react";
import "./deposit.css";
import "../sign-in/sign-in.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as RightChevron } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as BtcIcon } from "../../assets/icons/btc-icon.svg";
import { ReactComponent as LoadingIcon } from "../../assets/icons/refresh-icon.svg";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import { ReactComponent as LeftChev } from "../../assets/icons/arrow left.svg";

import cart_img from "../../assets/images/deposit-cart-images/card-cart.jpg";
import blox_img from "../../assets/images/deposit-cart-images/blox-cart.jpg";
import cashap_img from "../../assets/images/deposit-cart-images/cashap-cart.jpg";
import robux_img from "../../assets/images/deposit-cart-images/robux-cart.jpg";
import crypto_img from "../../assets/images/deposit-cart-images/crypto-cart.jpg";
import limited_img from "../../assets/images/deposit-cart-images/limeted-cart.jpg";

import bitcoin_img from "../../assets/images/deposit-cart-images/bitcoin-img.png";
import etherium_img from "../../assets/images/deposit-cart-images/etherium.png";
import limited_1 from "../../assets/images/limited/limited-1.png";
import limited_2 from "../../assets/images/limited/limited-2.png";
import limited_3 from "../../assets/images/limited/limited-3.png";
import limited_4 from "../../assets/images/limited/limited-4.png";
import limited_5 from "../../assets/images/limited/limited-5.png";
import limited_6 from "../../assets/images/limited/limited-6.png";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";

function Deposit({ toggleDeposit }) {
  const [activeModalType, setActiveModalType] = useState("main");
  const [transaction, setTransaction] = useState(false);

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
    <div className="sign_in_modal deposit_modal">
      <div className="modal_bg" onClick={toggleDeposit}></div>

      <div className="sign_in_wrapper modal_styles">
        {activeModalType === "main" ? (
          <>
            <div className="page_title">
              <h1 className="desktop_title">What would you like to deposit?</h1>
              <h1 className="mob_title">Deposit</h1>
              <div onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="deposit_modal_block">
              <div className="deposit_modal_item">
                <img src={cart_img} alt="Card" />
              </div>
              <div className="deposit_modal_item">
                <img src={blox_img} alt="BloxEmpire Card" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("promocode")}
              >
                <img src={cashap_img} alt="Cashapp" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("robux")}
              >
                <img src={robux_img} alt="Robux" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("crypto")}
              >
                <img src={crypto_img} alt="Crypto" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("limited")}
              >
                <img src={limited_img} alt="Limiteds" />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {activeModalType === "crypto" ? (
          <>
            <div className="block_nav">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p className="active_link">Crypto</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("main")}
                  />
                  <h2>Deposit Crypto</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title desktop_title">
              <h2>Deposit Crypto</h2>
            </div>
            <div className="deposit_modal_block crypto_block">
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("crypto_btc")}
              >
                <img src={bitcoin_img} alt="Bitcoin" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("crypto_btc")}
              >
                <img src={etherium_img} alt="Ethereum" />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {activeModalType === "crypto_btc" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p onClick={() => setActiveModalType("crypto")}>Crypto</p>
                </div>
                <div>
                  <RightChevron />
                  <p className="active_link">Bitcoin</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("crypto")}
                  />
                  <h2>Deposit Bitcoin</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse desktop_title">
              <h2>Deposit Bitcoin</h2>
            </div>
            <div className="deposit_modal_block crypto_block crypto_curse_converter">
              <p className="current_btcn_curse">
                Current rate: $3.4 = 1 000 R$
              </p>
              <div className="cripto_converter">
                <div className="left_crypto_input">
                  <p>Choose the amount of Bitcoin you want to deposit</p>
                  <div className={!transaction || "disabled_block"}>
                    <BtcIcon />
                    <input type="text" placeholder="00.0" />
                    <p>R$</p>
                  </div>
                </div>
                <p className="symbol">=</p>
                <div className="right_crypto_input">
                  <p>This is how much it will cost you in USD</p>
                  <div className={!transaction || "disabled_block"}>
                    <p>$</p>
                    <input type="text" placeholder="00.0" />
                  </div>
                </div>
              </div>
              {transaction !== false ? (
                <div className="disabled_input_container">
                  <LoadingIcon className="circle_anima" />
                  <input
                    type="button"
                    className="sign_submit_btn disabled_block"
                    value="transaction"
                    disabled
                  />
                </div>
              ) : (
                <input
                  onClick={() => setTransaction(true)}
                  type="button"
                  className="sign_submit_btn"
                  value="CONTINUE WITH $ -"
                />
              )}
            </div>
          </>
        ) : (
          ""
        )}
        {activeModalType === "limited" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p className="active_link">Limited</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("main")}
                  />
                  <h2>Deposit Limiteds</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2 className="desktop_title">Deposit Limiteds</h2>
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
              </div>
              <div className="selected_value_dep">
                <div className="selected_cards_values">
                  <p>Total value of selected limited</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>5 391</p>
                    </div>
                  </div>
                </div>
                <input
                  onClick={() => setActiveModalType("limited_value")}
                  type="button"
                  className="sign_submit_btn"
                  value="DEPOSIT LIMITEDS"
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {activeModalType === "limited_value" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p onClick={() => setActiveModalType("limited")}>Limited</p>
                </div>
                <div>
                  <RightChevron />
                  <p className="active_link">Item Value</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("limited")}
                  />
                  <h2>Deposit Limiteds</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2 className="desktop_title">Deposit Limiteds</h2>
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
        {activeModalType === "robux" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p className="active_link">Robux</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("main")}
                  />
                  <h2>Deposit Robux</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2 className="desktop_title">Deposit Robux</h2>
            </div>
            <div className="deposit_modal_block crypto_block limited_main">
              <div className="limited_value_block">
                <div className="limited_right_bar width_580px">
                  <p>Ammount of Robux</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />

                    <input
                      type="text"
                      placeholder="0.00"
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
        {activeModalType === "promocode" ? (
          <>
            <div className="block_nav crypto_curse">
              <div className="block_nav_links">
                <p onClick={() => setActiveModalType("main")}>Deposit </p>
                <div>
                  <RightChevron />
                  <p className="active_link">Promocode</p>
                </div>
                <div className="block_title">
                  <LeftChev
                    className="last_page_btn"
                    onClick={() => setActiveModalType("main")}
                  />
                  <h2>Deposit Promocode</h2>
                </div>
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
              <h2 className="desktop_title">Deposit Promocode</h2>
            </div>
            <div className="deposit_modal_block crypto_block limited_main">
              <div className="limited_value_block">
                <div className="limited_right_bar width_580px">
                  <p>Deposit R$ from a promo code that you have.</p>
                  <p className="mt_12px">Promocode number</p>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="modal_input_template mt_12px"
                  />

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
      </div>
    </div>
  );
}

export default Deposit;
