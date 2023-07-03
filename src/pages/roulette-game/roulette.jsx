import React from "react";
import Slider from "react-slick";
import { ReactComponent as RouletteIcon } from "../../assets/icons/roulette-icon.svg";
import coin_1 from "../../assets/images/roulette-carousel_items/coin-1.png";
import coin_2 from "../../assets/images/roulette-carousel_items/coin-2.png";
import coin_3 from "../../assets/images/roulette-carousel_items/coin-3.png";
import "./roulette.css";
import "../../components/sign-in/sign-in.css";
import "../../components/deposit/deposit.css";
import "../../components/withdraw-modal/withdraw.css";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as NoIcon } from "../../assets/icons/no-icon.svg";

import table_img_1 from "../../assets/images/home-page-table/table-img-1.png";
import { ReactComponent as Status } from "../../assets/icons/status-lvl-1.svg";
import HeaderTable from "../../components/header-table/header-table";
import "../tower/tower.css"
import "../home-page/home-page.css"

function Roulette() {
  var carousel_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 3,
    initialSlide: 0,

    centerMode: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 11,
        },
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="roulette_page main_page_styles">
      <div className="roulette_wrapper">
        <div className="top_roulete_carousel">
          <div className="top_roulette_carousel_lines">
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_green"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_green"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_blue"></div>
            <div className="top_roulette_carousel_line tint_orange"></div>
          </div>
          <div className="roulette_carousel_item">
            <Slider {...carousel_settings}>
              <div>
                <img src={coin_1} alt="coin_img" />
              </div>
              <div>
                <img src={coin_1} alt="coin_img" />
              </div>
              <div>
                <img src={coin_2} alt="coin_img" />
              </div>
              <div>
                <img src={coin_3} alt="coin_img" />
              </div>
              <div>
                <img src={coin_2} alt="coin_img" />
              </div>
              <div>
                <img src={coin_1} alt="coin_img" />
              </div>
              <div>
                <img src={coin_2} alt="coin_img" />
              </div>
              <div>
                <img src={coin_3} alt="coin_img" />
              </div>
              <div>
                <img src={coin_1} alt="coin_img" />
              </div>
              <div>
                <img src={coin_2} alt="coin_img" />
              </div>
              <div>
                <img src={coin_3} alt="coin_img" />
              </div>
              <div>
                <img src={coin_3} alt="coin_img" />
              </div>
              <div>
                <img src={coin_1} alt="coin_img" />
              </div>
              <div>
                <img src={coin_2} alt="coin_img" />
              </div>
              <div>
                <img src={coin_3} alt="coin_img" />
              </div>
            </Slider>
          </div>
          <div className="roulette_icon">
            <div>
              <RouletteIcon />
            </div>
          </div>
        </div>
        <div className="roulette_currency nav_wallet_currency">
          <RsCurrencyLogo />
          <div className="robux_input_increments">
            <div className="input_increment">
              <p>+50</p>
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
          <input
            type="text"
            defaultValue={1000}
            className="modal_input_template"
          />
        </div>
        <div className="roulette_bet_blocks">
          <div className="roulette_bet_block">
            <div className="roulette_bet_grade">
              <p>2X</p>
              <p>BET</p>
            </div>
            <div className="bet_total">
              <div className="total_inv">
                <div className="m_30">
                  <p className="main_p_style">Selected</p>
                  <p className="main_p_style white">22</p>
                </div>
                <div className="vetical_gray_line"></div>
                <div className="m_30">
                  <p className="main_p_style">Total value</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>334</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet_users_list">
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item bet_users_list_item_active">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roulette_bet_block">
            <div className="roulette_bet_grade bet_green">
              <p>14X</p>
              <p>BET</p>
            </div>
            <div className="bet_total">
              <div className="total_inv">
                <div className="m_30">
                  <p className="main_p_style">Selected</p>
                  <p className="main_p_style white">22</p>
                </div>
                <div className="vetical_gray_line"></div>
                <div className="m_30">
                  <p className="main_p_style">Total value</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>334</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet_users_list">
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item bet_users_list_item_active">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
              <div className="bet_users_list_item">
                <div className="bet_user">
                  <div className="dflex_aicenter">
                    <img
                      src={table_img_1}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="main_p_style">Brandon</p>
                    <Status />
                  </div>
                </div>
                <div className="nav_wallet_currency">
                  <RsCurrencyLogo />
                  <div>
                    <p>334</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roulette_bet_block">
            <div className="roulette_bet_grade bet_orange">
              <p>2X</p>
              <p>BET</p>
            </div>
            <div className="bet_total">
              <div className="total_inv">
                <div className="m_30">
                  <p className="main_p_style">Selected</p>
                  <p className="main_p_style white">0</p>
                </div>
                <div className="vetical_gray_line"></div>
                <div className="m_30">
                  <p className="main_p_style">Total value</p>
                  <div className="nav_wallet_currency">
                    <RsCurrencyLogo />
                    <div>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet_users_list no_bets">
              <div className="no_icon">
                <NoIcon />
                <p className="main_p_style">NO BETS</p>
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
    </div>
  );
}

export default Roulette;
