import React from "react";
import "./earn.css";

import earn_1 from "../../assets/images/earn-card-images/earn-1.jpg";
import earn_20 from "../../assets/images/earn-card-images/earn-2.0.png";

import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";
import earn_3 from "../../assets/images/earn-card-images/earn-3.jpg";
import earn_4 from "../../assets/images/earn-card-images/earn-4.jpg";
import earn_5 from "../../assets/images/earn-card-images/earn-5.jpg";
import earn_6 from "../../assets/images/earn-card-images/earn-6.jpg";
import earn_7 from "../../assets/images/earn-card-images/earn-7.jpg";
import earn_80 from "../../assets/images/earn-card-images/earn-8.0.jpg";

import earn_9 from "../../assets/images/earn-card-images/earn-9.jpg";

import { ReactComponent as BonusIcon } from "../../assets/icons/bonus-icon.svg";
import { ReactComponent as EarnHeaderbg } from "../../assets/icons/earn_bg.svg";

function Earn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="earn_page main_page_styles">
      <div className="earn_wrapper">
        <div className="page_title">
          <LeftIcon onClick={goBack} />
          <h1>Earn</h1>
          <p className="main_p_style">
            Choose from one pf our offer wall providers below to start earning
            coins
          </p>
        </div>
        <div className="earn_header_bg">
          <EarnHeaderbg />
          <h2>EARN REAL COINS</h2>
          <p className="main_p_style">
            Choose from one pf our offer wall providers below <br /> to start
            earning coins
          </p>
        </div>
        <div className="earn_cards">
          <div className="earn_card_item">
            <img src={earn_1} alt="" />
          </div>
          <div className="earn_card_item back_ground_2">
            <div className="bonus_block">
              <BonusIcon />
              <p className="main_p_style">20% bonus</p>
            </div>
            <img src={earn_20} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_3} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_4} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_5} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_6} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_7} alt="" />
          </div>
          <div className="earn_card_item back_ground_3">
            <div className="bonus_block">
              <BonusIcon />
              <p className="main_p_style">20% bonus</p>
            </div>
            <img src={earn_80} alt="" />
          </div>
          <div className="earn_card_item">
            <img src={earn_9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earn;
