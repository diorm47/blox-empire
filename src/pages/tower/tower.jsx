import React from "react";
import "./tower.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as CardBgBlur } from "../../assets/icons/card-bg-blur.svg";
import "../../components/sign-in/sign-in.css";
import "../home-page/home-page.css";
import HeaderTable from "../../components/header-table/header-table";
function Tower({ isMenuVisible }) {
  return (
    <>
      <div
        className={
          !isMenuVisible
            ? "tower_page  main_page_styles"
            : "tower_page  main_page_styles pr"
        }
      >
        <div className="tower_wrapper">
          <div className="tower_top_blocks">
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.90</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.90</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.90</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.80</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.80</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.80</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.70</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.70</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.70</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.60</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.60</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.60</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.40</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.40</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.40</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.30</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.30</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.30</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>0.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
            <div className="tower_card">
              <CardBgBlur className="card_bg_blur" />
              <RsCurrencyLogo className="rs_currency_icon" />
              <p>301.20</p>
            </div>
          </div>
          <div className="tower_game_block">
            <div className="t_curr_start">
              <div className="tower_currency">
                <RsCurrencyLogo />
                <input
                  type="text"
                  defaultValue={1000}
                  className="modal_input_template"
                />
              </div>
              <input type="button" className="sign_submit_btn" value="PLAY" />
            </div>
            <div className="home_page_table_tabs">
              <button className="tabel_tab_btn active_tab_btn">Easy</button>
              <button className="tabel_tab_btn">Medium</button>
              <button className="tabel_tab_btn">Hard</button>
            </div>
            <div className="tower_input_increments">
              <div className="input_increment">
                <p>Min</p>
              </div>
              <div className="input_increment">
                <p>+50</p>
              </div>
              <div className="input_increment">
                <p>+100</p>
              </div>
              <div className="input_increment">
                <p>+100</p>
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
          </div>
        </div>
        <div className="pages_live_fee">
          <div className="page_title">
            <h1>Live feed</h1>
          </div>
          <div className="home_page_table">
            <div className="home_page_table_tabs">
              <button className="tabel_tab_btn active_tab_btn">All bets</button>
              <button className="tabel_tab_btn">High wins</button>
              <button className="tabel_tab_btn">Lucky wins</button>
            </div>
            <div className="header_table_content">
              <HeaderTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tower;
