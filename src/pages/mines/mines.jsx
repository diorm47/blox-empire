import React from "react";
import "../tower/tower.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as PlinkoTree } from "../../assets/icons/plinko-tree.svg";
import "../../components/sign-in/sign-in.css";
import "../home-page/home-page.css";
import "../plinko/plinko.css";
import "./mines.css";
import HeaderTable from "../../components/header-table/header-table";
import { ReactComponent as DiamondIcon } from "../../assets/icons/mines-icons/diamond-icon.svg";
import { ReactComponent as BombIcon } from "../../assets/icons/mines-icons/bomb-icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/arrow right.svg";
import mines_card_1 from "../../assets/icons/mines-icons/mines-card.png";
import mines_card_2 from "../../assets/icons/mines-icons/mines-diamond.png";
import mines_card_3 from "../../assets/icons/mines-icons/mines-bomb.png";
import mines_car_item_1 from "../../assets/icons/mines-icons/polygon-1.png";
import mines_car_item_2 from "../../assets/icons/mines-icons/polygon-2.png";
import mines_car_item_3 from "../../assets/icons/mines-icons/polygon-3.png";

function Mines({ isMenuVisible }) {
  return (
    <>
      <div
        className={
          !isMenuVisible
            ? "tower_page mines_page main_page_styles"
            : "tower_page mines_page main_page_styles pr"
        }
      >
        <div className="tower_wrapper">
          <div className="mobile_top_result">
            <div className="mobile_top_result_item left_top_mines">
              <div>
                <p>DIAMONDS</p>
                <p>4</p>
              </div>
              <DiamondIcon />
            </div>
            <div className="mobile_top_result_item right_top_mines">
              <BombIcon /> 
              <div>
                <p>BOMB</p>
                <p>8</p>
              </div>
            </div>
          </div>
          <div className="mines_block_wrapper">
            <div className="top_game_content">
              <div className="left_diamonds">
                <DiamondIcon />
                <p className="mb_10px">DIAMONDS</p>
                <p>4</p>
              </div>
              <div className="center_mines_game">
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_2} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_2} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_2} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_3} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_2} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_2} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
                <div>
                  <img src={mines_card_1} alt="mines card" />
                </div>
              </div>
              <div className="left_diamonds right_bomb">
                <BombIcon />
                <p className="mb_10px">BOMB</p>
                <p>4</p>
              </div>
            </div>
            <div className="mines_block_carousel">
              <div className="carousel_arrows">
                <LeftIcon />
              </div>
              <div className="mines_carousel_content">
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>1.19x</p>
                  <span>1 hit</span>
                </div>
                <div className="carousel_line colored_line"></div>
                <div className="mines_carousel_item colored_item_3">
                  <img src={mines_car_item_3} alt="" />
                  <p>1.35x</p>
                  <span>2 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_2} alt="" />
                  <p>1.69x</p>
                  <span>3 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>2.0x</p>
                  <span>4 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>2.55x</p>
                  <span>5 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>3.02x</p>
                  <span>6 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>3.65x</p>
                  <span>7 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>3.65x</p>
                  <span>8 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>3.65x</p>
                  <span>9 hit</span>
                </div>
                <div className="carousel_line"></div>
                <div className="mines_carousel_item">
                  <img src={mines_car_item_1} alt="" />
                  <p>3.65x</p>
                  <span>10 hit</span>
                </div>
              </div>
              <div className="carousel_arrows">
                <RightIcon />
              </div>
            </div>
          </div>
          <div className="tower_game_block">
            <div className="t_curr_start">
              <div className="tower_currency">
                <RsCurrencyLogo />
                <input
                  type="text"
                  defaultValue={10}
                  className="modal_input_template"
                />
              </div>
              <input type="button" className="sign_submit_btn" value="PLAY" />
            </div>
            <div className="plinko_numbers">
              <button className="active_plinko_number">8</button>
              <button>9</button>
              <button>10</button>
              <button>11</button>
              <button className="mines_other_btn">Other</button>
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

export default Mines;
