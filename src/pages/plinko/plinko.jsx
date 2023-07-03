import React from "react";
import "../tower/tower.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as PlinkoTree } from "../../assets/icons/plinko-tree.svg";
import "../../components/sign-in/sign-in.css";
import "../home-page/home-page.css";
import "./plinko.css";
import HeaderTable from "../../components/header-table/header-table";
function Plinko({ isMenuVisible }) {
  return (
    <>
      <div
        className={
          !isMenuVisible
            ? "tower_page plinko_page main_page_styles"
            : "tower_page plinko_page main_page_styles pr"
        }
      >
        <div className="tower_wrapper">
          <div className="plinko_tree">
            <PlinkoTree />
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
              <input type="button" className="sign_submit_btn" value="BET" />
            </div>
            <div className="plinko_numbers">
              <button className="active_plinko_number">8</button>
              <button>9</button>
              <button>10</button>
              <button>11</button>
              <button>12</button>
              <button>13</button>
              <button>14</button>
              <button>15</button>
              <button>16</button>
              <button>17</button>
              <button>18</button>
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

export default Plinko;
