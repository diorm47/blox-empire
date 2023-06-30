import React from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import crash_img from "../../assets/images/home-games/Crash.jpg";
import mines_img from "../../assets/images/home-games/Mines.jpg";
import coinflip_img from "../../assets/images/home-games/Coinflip.jpg";
import cases_img from "../../assets/images/home-games/Cases.jpg";
import upgrade_img from "../../assets/images/home-games/Upgrade.jpg";
import roulette_img from "../../assets/images/home-games/Roulette.jpg";
import tower_img from "../../assets/images/home-games/Tower.jpg";
import plinko_img from "../../assets/images/home-games/Plinko.jpg";
import HeaderTable from "../../components/header-table/header-table";

import Slider from "react-slick";
function HomePage() {
  var carousel_settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    
    arrows: false,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="home_page">
      <div className="home_page_wrapper">
        <div className="page_title">
          <h1>Popular game</h1>
        </div>
        <div className="home_page_carousel">
          <Slider {...carousel_settings}>
            <div>
              <NavLink to="/crash">
                <img src={crash_img} alt="crash_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/mines">
                <img src={mines_img} alt="mines_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/coinflip">
                <img src={coinflip_img} alt="coinflip_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/cases">
                <img src={cases_img} alt="cases_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/upgrade">
                <img src={upgrade_img} alt="upgrade_img" />
              </NavLink>
            </div>

            <div>
              <NavLink to="/roulette">
                <img src={roulette_img} alt="roulette_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/tower">
                <img src={tower_img} alt="tower_img" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/plinko">
                <img src={plinko_img} alt="plinko_img" />
              </NavLink>
            </div>
          </Slider>
        </div>
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
  );
}

export default HomePage;
