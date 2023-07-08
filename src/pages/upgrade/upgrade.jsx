import React, { useState } from "react";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import {
  default as limited_1,
  default as upgrade_img,
} from "../../assets/images/limited/limited-1.png";
import {
  default as limited_2,
  default as upgrade_img_2,
} from "../../assets/images/limited/limited-2.png";
import limited_3 from "../../assets/images/limited/limited-3.png";
import limited_4 from "../../assets/images/limited/limited-4.png";
import limited_5 from "../../assets/images/limited/limited-5.png";
import limited_6 from "../../assets/images/limited/limited-6.png";
import upgrade_bg from "../../assets/images/upgrade-bg.png";
import { ReactComponent as YourLimited1 } from "../../assets/images/upgrade-images/upgrade-1.svg";
import { ReactComponent as YourLimited2 } from "../../assets/images/upgrade-images/upgrade-2.svg";
import { ReactComponent as YourLimited2Bg } from "../../assets/images/upgrade-images/upgrade-linear-bg-2.svg";
import { ReactComponent as YourLimited1Bg } from "../../assets/images/upgrade-images/upgrade-linear-bg.svg";
import user_img_2 from "../../assets/images/user-avatar-2.png";
import user_img from "../../assets/images/user-avatar-3.png";
import "../../components/deposit/deposit.css";
import "../../components/sign-in/sign-in.css";
import "../cases/cases.css";
import "./upgrade.css";
function Upgrade() {
  const [upgradeModal, setUpgradeModal] = useState(false);
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
      <div className="upgrade_page main_page_styles">
        <img src={upgrade_bg} className="upgrader_bg" alt="" />
        <div className="upgrade_wrapper">
          <div className="top_upgrade_title">
            <h2>LastEST upgrade</h2>
            <div className="top_upgrade_content">
              <div className="left_upgrade_cards">
                <div className="left_upgrade_card">
                  <div className="user_upgrade_avatar">
                    <img src={user_img} alt="" />
                    <p className="main_p_style">Priscilla</p>
                  </div>
                  <div className="upgrader_card_items">
                    <div className="upgrader_card_item left_card_upgrade">
                      <div className="aquare_romb"></div>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                    <div className="upgrader_card_item">
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                  </div>
                </div>
                <div className="left_upgrade_card">
                  <div className="user_upgrade_avatar">
                    <img src={user_img_2} alt="" />
                    <p className="main_p_style">Tanya</p>
                  </div>
                  <div className="upgrader_card_items">
                    <div className="upgrader_card_item left_card_upgrade">
                      <div className="aquare_romb"></div>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img_2} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                    <div className="upgrader_card_item">
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img_2} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                  </div>
                </div>
                <div className="left_upgrade_card">
                  <div className="user_upgrade_avatar">
                    <img src={user_img} alt="" />
                    <p className="main_p_style">Priscilla</p>
                  </div>
                  <div className="upgrader_card_items">
                    <div className="upgrader_card_item left_card_upgrade">
                      <div className="aquare_romb"></div>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                    <div className="upgrader_card_item">
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                  </div>
                </div>
                <div className="left_upgrade_card">
                  <div className="user_upgrade_avatar">
                    <img src={user_img_2} alt="" />
                    <p className="main_p_style">Tanya</p>
                  </div>
                  <div className="upgrader_card_items">
                    <div className="upgrader_card_item left_card_upgrade">
                      <div className="aquare_romb"></div>
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img_2} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                    <div className="upgrader_card_item">
                      <div className="nav_wallet_currency">
                        <RsCurrencyLogo />
                        <div>
                          <p>334</p>
                        </div>
                      </div>
                      <img src={upgrade_img_2} alt="" />
                      <p className="main_p_style">Turkey Chef Hat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_upgrade_main">
                <div className="top_limiteds">
                  <div>
                    <YourLimited1 />
                    <YourLimited1Bg className="bg_linear_1" />
                  </div>
                  <div>
                    <YourLimited2 className="right_flash" />
                    <YourLimited2Bg className="bg_linear_2" />
                  </div>
                </div>
                <div className="bottom_upgrade">
                  <div className="bottom_analyze">
                    <p className="bottom_upgrade_title">Win chance</p>
                    <p className="bottom_top_percent">45.00%</p>
                    <p className="bottom_upgrade_percent">+1.50%</p>
                  </div>
                  <div>
                    <div className="bottom_remote_block">
                      <div className="grade_scores">
                        <div>
                          <p>1.5x</p>
                        </div>
                        <div>
                          <p>2x</p>
                        </div>
                        <div>
                          <p>5x</p>
                        </div>
                        <div>
                          <p>10x</p>
                        </div>
                        <div>
                          <p>20x</p>
                        </div>
                        <p className="main_p_style">Custom item</p>
                      </div>
                      <div className="select_limited">
                        <button>SELECT LIMITED</button>
                      </div>
                      <div className="upgrade_rolls">
                        <button>
                          Roll under <span>46.50</span>
                        </button>
                        <button>Roll over 53.50</button>
                      </div>
                      <div className="quick_case_opening">
                        <label class="switch">
                          <input type="checkbox" defaultChecked />
                          <span class="slider round"></span>
                        </label>
                        <p className="main_p_style">Instant upgrade</p>
                      </div>
                    </div>

                    <div className="bottom_buttons">
                      <button onClick={() => setUpgradeModal(true)}>
                        YOUR INVENTORY
                      </button>
                      <button onClick={() => setUpgradeModal(true)}>
                        blox inventory
                      </button>
                    </div>
                  </div>
                  <div className="bottom_analyze">
                    <p className="bottom_upgrade_title">multiplier</p>
                    <p className="bottom_top_percent">5.00x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!upgradeModal || (
        <div className="sign_in_modal upgrade_modal ">
          <div
            className="modal_bg"
            onClick={() => setUpgradeModal(false)}
          ></div>
          <div className="sign_in_wrapper modal_styles ">
            <div className="deposit_modal_block crypto_block limited_main">
              <div className="block_nav ">
                <div className="block_nav_links">
                  <div className="block_title crypto_curse">
                    <h2>Inventory</h2>
                  </div>
                </div>
                <div
                  className="close_icon"
                  onClick={() => setUpgradeModal(false)}
                >
                  <CloseIcon />
                </div>
              </div>
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
                  type="button"
                  className="sign_submit_btn"
                  value="DEPOSIT LIMITEDS"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Upgrade;
