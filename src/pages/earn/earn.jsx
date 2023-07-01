import React from "react";
import "./earn.css";

import { ReactComponent as AdIcon } from "../../assets/images/earn-card-images/Frame 2131326758.svg";
import { ReactComponent as WhiteIcon } from "../../assets/images/earn-card-images/white.svg";
import { ReactComponent as BigIcon } from "../../assets/images/earn-card-images/big.svg";
import { ReactComponent as BonusIcon } from "../../assets/icons/bonus-icon.svg";

function Earn() {
  return (
    <div className="earn_page main_page_styles">
      <div className="earn_wrapper">
        <div className="page_title">
          <h1>Earn</h1>
          <p className="main_p_style">
            Choose from one pf our offer wall providers below to start earning
            coins
          </p>
        </div>
        <div className="earn_header_bg">
          <h2>EARN REAL COINS</h2>
          <p className="main_p_style">
            Choose from one pf our offer wall providers below <br /> to start
            earning coins
          </p>
        </div>
        <div className="earn_cards">
          <div className="earn_card_item">
            <WhiteIcon />
          </div>
          <div className="earn_card_item">
            <div className="bonus_block">
              <BonusIcon />
              <p className="main_p_style">20% bonus</p>
            </div>
            <AdIcon />
          </div>
          <div className="earn_card_item">
            <BigIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earn;
