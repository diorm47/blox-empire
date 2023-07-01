import React, { useState } from "react";
import "./deposit.css";
import "../sign-in/sign-in.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as RightChevron } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as BtcIcon } from "../../assets/icons/btc-icon.svg";
import { ReactComponent as LoadingIcon } from "../../assets/icons/refresh-icon.svg";

import cart_img from "../../assets/images/deposit-cart-images/card-cart.jpg";
import blox_img from "../../assets/images/deposit-cart-images/blox-cart.jpg";
import cashap_img from "../../assets/images/deposit-cart-images/cashap-cart.jpg";
import robux_img from "../../assets/images/deposit-cart-images/robux-cart.jpg";
import crypto_img from "../../assets/images/deposit-cart-images/crypto-cart.jpg";
import limited_img from "../../assets/images/deposit-cart-images/limeted-cart.jpg";

import bitcoin_img from "../../assets/images/deposit-cart-images/bitcoin-img.png";
import etherium_img from "../../assets/images/deposit-cart-images/etherium.png";

function Deposit({ toggleDeposit }) {
  const [activeModalType, setActiveModalType] = useState("main");
  const [transaction, setTransaction] = useState(false);
  console.log(
    !transaction ? (
      <div className="disabled_input_container">
        <LoadingIcon />
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
    )
  );
  return (
    <div className="sign_in_modal deposit_modal">
      <div className="modal_bg" onClick={toggleDeposit}></div>

      <div className="sign_in_wrapper modal_styles">
        {activeModalType === "main" ? (
          <>
            <div className="page_title">
              <h1>What would you like to deposit?</h1>
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
              <div className="deposit_modal_item">
                <img src={cashap_img} alt="Cashapp" />
              </div>
              <div className="deposit_modal_item">
                <img src={robux_img} alt="Robux" />
              </div>
              <div
                className="deposit_modal_item"
                onClick={() => setActiveModalType("crypto")}
              >
                <img src={crypto_img} alt="Crypto" />
              </div>
              <div className="deposit_modal_item">
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
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title">
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
              </div>
              <div className="close_icon" onClick={toggleDeposit}>
                <CloseIcon />
              </div>
            </div>
            <div className="block_title crypto_curse">
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
      </div>
    </div>
  );
}

export default Deposit;
