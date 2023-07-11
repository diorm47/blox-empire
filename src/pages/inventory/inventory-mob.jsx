import React from "react";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "../../components/deposit/deposit.css";
import "../../components/sign-in/sign-in.css";
import "./inventory.css";

import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import limited_2 from "../../assets/images/limited/limited-2.png";
import limited_4 from "../../assets/images/limited/limited-4.png";
import limited_6 from "../../assets/images/limited/limited-6.png";
function InventoryMob() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const limited = [
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
    <div className="sign_in_modal inventory_mob deposit_modal">
      <div className="modal_bg" onClick={goBack}></div>

      <div className="sign_in_wrapper modal_styles">
        <>
          <div className="block_nav crypto_curse">
            <div className="page_title">
              <h1>Inventory (17)</h1>
            </div>
            <div className="close_icon" onClick={goBack}>
              <CloseIcon />
            </div>
          </div>
          <div className="block_title crypto_curse">
            <h2 className="desktop_title">Deposit Limiteds</h2>
          </div>
          <div className="deposit_modal_block crypto_block limited_main">
            <input
              type="text"
              placeholder="Search Limited "
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
                    className={limit.isSelected ? "card_item_selected_btn" : ""}
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
            <div className="selected_value_dep inv_mob">
              <div className="total_inv">
                <div>
                  <p className="main_p_style">Total value</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>334</p>
                    </div>
                  </div>
                </div>
                <div className="vetical_gray_line m_30"></div>
                <div >
                  <p className="main_p_style">Selected</p>
                  <p className="main_p_style white">2</p>
                </div>
                <div className="affliate_code">
                  <input type="checkbox" name="" id="" />
                  <p>Select all</p>
                </div>
              </div>
              <input
                type="button"
                className="sign_submit_btn"
                value="Withdraw 272.2k"
              />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default InventoryMob;
