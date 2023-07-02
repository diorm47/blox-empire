import React from "react";
import "./rewards.css";
import { Progress } from "flowbite-react";
import { ReactComponent as CirleIcon } from "../../assets/icons/circle.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as Gradient } from "../../assets/icons/reward_gradient.svg";
import { ReactComponent as RewardsBG } from "../../assets/icons/reward-bg.svg";

function Rewards() {
  return (
    <div className="rewards_page main_page_styles">
      <div className="rewards_wrapper">
        <div className="reward_scores">
          <CirleIcon className="rolling_circle" />
          <RewardsBG  className="reward_bg"/>
          <h1 className="reward_score_percent">12%</h1>
          <div className="page_title mb_32px">
            <h1>Your Rakeback</h1>
          </div>
          <div className="claim_coins">
            <span>Available to claim:</span>
            <div className="nav_wallet_currency">
              <RsCurrencyLogo />
              <div>
                <p>5 237</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user_scores">
          <Gradient className="top_gradient" />
          <div className="progress_title">
            <p>Your progress</p>
            <p>5.58%</p>
          </div>
          <div className="progress_bar">
            <Progress progress={13} />
            <div className="progress_precents">
              <div className="progress_percent_item">
                <div className="percent_vertical_line active_percent"></div>
                <div className="precent_item active_percent">
                  <p>5%</p>
                </div>
              </div>
              <div className="progress_percent_item">
                <div className="percent_vertical_line"></div>
                <div className="precent_item">
                  <p>7%</p>
                </div>
              </div>
              <div className="progress_percent_item">
                <div className="percent_vertical_line"></div>
                <div className="precent_item">
                  <p>10%</p>
                </div>
              </div>
              <div className="progress_percent_item">
                <div className="percent_vertical_line"></div>
                <div className="precent_item">
                  <p>12%</p>
                </div>
              </div>
              <div className="progress_percent_item">
                <div className="percent_vertical_line"></div>
                <div className="precent_item">
                  <p>14%</p>
                </div>
              </div>
              <div className="progress_percent_item">
                <div className="percent_vertical_line"></div>
                <div className="precent_item">
                  <p>16%</p>
                </div>
              </div>
            </div>
          </div>
          <input
            type="button"
            className="sign_submit_btn"
            value="claim rakeback"
          />

          <div className="reward_bottom_texts">
            <div>
              <p className="main_p_style">
                Get a percent back from the house edge with Rakeback! The more{" "}
                <br />
                you wager on your account, the more ROBUX you will earn from{" "}
                <br />
                Rakeback!
              </p>
            </div>
            <div className="bottom_conbert_scores">
              <div>
                <p className="main_p_style">
                  Silver (350,000 wagered) = <span>7%</span>
                </p>
                <p className="main_p_style">
                  Bronze (150,000 wagered) = <span>5%</span>
                </p>
                <p className="main_p_style">
                  Gold (550,000 Wagered) = <span>10%</span>
                </p>
              </div>
              <div>
                <p className="main_p_style">
                  Diamond I (750,000 Wagered) = <span>12%</span>
                </p>
                <p className="main_p_style">
                  Diamond II (950,000 Wagered) = <span>14%</span>
                </p>
                <p className="main_p_style">
                  Diamond III (1,500,000 Wagered) = <span>16%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
