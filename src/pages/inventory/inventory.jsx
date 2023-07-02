import React, { useState } from "react";
import "./inventory.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import inventory_1 from "../../assets/images/inventory-images/inventory-1.png";
import inventory_2 from "../../assets/images/inventory-images/inventory-2.png";
import inventory_3 from "../../assets/images/inventory-images/inventory-3.png";
import inventory_4 from "../../assets/images/inventory-images/inventory-4.png";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";

function Inventory() {
  const [withdraw, setWithdraw] = useState(false);
  const inventory = [
    {
      id: 1,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_1,
      isSelected: false,
    },
    {
      id: 2,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_2,
      isSelected: true,
    },
    {
      id: 3,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_3,
      isSelected: false,
    },
    {
      id: 4,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_4,
      isSelected: false,
    },
    {
      id: 5,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_1,
      isSelected: true,
    },
    {
      id: 6,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: inventory_2,
      isSelected: false,
    },
    {
      id: 7,
      description: "Catrin Dia de Muertos Mask",
      cost: 99,
      image: inventory_3,
      isSelected: false,
    },
    {
      id: 8,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: inventory_4,
      isSelected: false,
    },
  ];
  return (
    <div className="inventory_page main_page_styles">
      <div
        className={
          withdraw ? "inventory_wrapper withdraw_running" : "inventory_wrapper"
        }
      >
        <div className="page_title mb_32px">
          <h1>Inventory (245)</h1>
        </div>
        <div className="inventory_top_actions">
          <input
            type="text"
            placeholder="Search Limited"
            className="modal_input_template"
          />
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
              <p className="main_p_style">Selected</p>
              <p className="main_p_style white">2</p>
            </div>
          </div>
          <div className="affliate_code">
            <input type="checkbox" name="" id="" />
            <p>Select all</p>
          </div>
          {!withdraw ? (
            <input
              type="button"
              className="sign_submit_btn"
              value="Withdraw 272.2k"
              onClick={() => setWithdraw(true)}
            />
          ) : (
            <input
              type="button"
              className="sign_submit_btn disabled_block"
              value="Withdraw items"
              disabled
            />
          )}
        </div>
        <div className="inventory_blocks_wrapper">
          {inventory.map((inventory) => (
            <div
              key={inventory.id}
              className={
                inventory.isSelected
                  ? "card_item_selected modal_card_item"
                  : "modal_card_item"
              }
            >
              <button
                className={inventory.isSelected ? "card_item_selected_btn" : ""}
              ></button>
              <div className="card_img_temp">
                <img src={inventory.image} alt={inventory.image} />
              </div>
              <div className="temp_text">
                <p className="main_p_style">{inventory.description}</p>
              </div>
              <div className="nav_wallet_currency">
                <RsCurrencyLogo />
                <div>
                  <p>{inventory.cost}</p>
                </div>

                {inventory.isSelected ? (
                  <input type="button" value="Sell" className="sell_btn" />
                ) : (
                  ""
                )}
              </div>
              <Btm className="btm_shadow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
