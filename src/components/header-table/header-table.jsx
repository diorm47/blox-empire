import React from "react";
import "./header-table.css";
import { ReactComponent as CrashLogo } from "../../assets/logos/sidebar-icons/crash.svg";
import { ReactComponent as CoinflipLogo } from "../../assets/logos/sidebar-icons/coinflip.svg";
import { ReactComponent as RouletteLogo } from "../../assets/logos/sidebar-icons/roulette.svg";
import { ReactComponent as UpgradeLogo } from "../../assets/logos/sidebar-icons/upgrade.svg";
import { ReactComponent as CasesLogo } from "../../assets/logos/sidebar-icons/cases.svg";
import { ReactComponent as TowerLogo } from "../../assets/logos/sidebar-icons/tower.svg";

import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";

import table_img_1 from "../../assets/images/home-page-table/table-img-1.png";
import table_img_2 from "../../assets/images/home-page-table/table-img-2.png";
import table_img_3 from "../../assets/images/home-page-table/table-img-3.png";
import table_img_4 from "../../assets/images/home-page-table/table-img-4.png";

function HeaderTable() {
  const columnTitles = [
    "Game",
    "Username",
    "Time",
    "Bet",
    "Multiplier",
    "Payout",
  ];
  const data = [
    {
      id: 0,
      game: [
        {
          game_name: "Crash",
          game_icon: CrashLogo,
        },
      ],
      username: [
        {
          user_full_name: "Bessie Cooper",
          user_avatar: table_img_1,
        },
      ],
      time: "15:20",
      bet: 2342,
      multiplier: 2.33,
      payout: 1234,
    },
    {
      id: 1,
      game: [
        {
          game_name: "Coinflip",
          game_icon: CoinflipLogo,
        },
      ],
      username: [
        {
          user_full_name: "Ronald Richards",
          user_avatar: table_img_2,
        },
      ],
      time: "12:20",
      bet: 6342,
      multiplier: 1.33,
      payout: 2334,
    },
    {
      id: 2,
      game: [
        {
          game_name: "Roulette",
          game_icon: RouletteLogo,
        },
      ],
      username: [
        {
          user_full_name: "Brooklyn Simmons",
          user_avatar: table_img_3,
        },
      ],
      time: "02:00",
      bet: 1342,
      multiplier: 1.33,
      payout: 2334,
    },
    {
      id: 4,
      game: [
        {
          game_name: "Upgrade",
          game_icon: UpgradeLogo,
        },
      ],
      username: [
        {
          user_full_name: "Kristin Watson",
          user_avatar: table_img_4,
        },
      ],
      time: "02:00",
      bet: 1342,
      multiplier: 1.33,
      payout: 2334,
    },
    {
      id: 5,
      game: [
        {
          game_name: "Upgrade",
          game_icon: UpgradeLogo,
        },
      ],
      username: [
        {
          user_full_name: "Bessie Cooper",
          user_avatar: table_img_1,
        },
      ],
      time: "15:20",
      bet: 2342,
      multiplier: 2.33,
      payout: 1234,
    },
    {
      id: 6,
      game: [
        {
          game_name: "Tower",
          game_icon: TowerLogo,
        },
      ],
      username: [
        {
          user_full_name: "Ronald Richards",
          user_avatar: table_img_2,
        },
      ],
      time: "12:20",
      bet: 6342,
      multiplier: 1.33,
      payout: 2334,
    },
    {
      id: 7,
      game: [
        {
          game_name: "Cases",
          game_icon: CasesLogo,
        },
      ],
      username: [
        {
          user_full_name: "Brooklyn Simmons",
          user_avatar: table_img_3,
        },
      ],
      time: "02:00",
      bet: 1342,
      multiplier: 1.33,
      payout: 2334,
    },
  ];

  return (
    <>
      <table
        className="header_table"
        style={{ width: "100%", tableLayout: "fixed" }}
      >
        <thead>
          <tr>
            {columnTitles.map((title, id) => (
              <th className={id === 0 ? "left_20px" : ""} key={id}>
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, id) => (
            <tr
              key={id}
              className={id % 2 === 0 ? "colored_tr_bg" : "not_colored"}
            >
              <td className="br_left">
                {item.game.map((game, idx) => (
                  <div key={idx} className="dflex_aicenter left_20px">
                    <game.game_icon className="mr_12px" />
                    <p className="table_main_text_styles">{game.game_name}</p>
                  </div>
                ))}
              </td>
              <td>
                {item.username.map((user, idx) => (
                  <div key={idx} className="dflex_aicenter">
                    <img
                      src={user.user_avatar}
                      className="mr_12px"
                      alt="User Avatar"
                    />
                    <p className="table_main_text_styles">
                      {user.user_full_name}
                    </p>
                  </div>
                ))}
              </td>
              <td>
                <p className="table_main_text_styles">{item.time}</p>
              </td>
              <td>
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles">
                    {" "}
                    {new Intl.NumberFormat("ru-RU").format(item.bet)}
                  </p>
                </div>
              </td>
              <td>
                <div className="dflex_aicenter">
                  <p className="table_main_text_styles">
                    {item.multiplier} <span>x</span>
                  </p>
                </div>
              </td>

              <td className="colored_item">
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles">
                    {new Intl.NumberFormat("ru-RU").format(item.payout)}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="header_table_mobile">
        {data.map((item, id) => (
          <div
            key={id}
            className={
              id % 2 === 0
                ? "header_table_mob_items colored_tr_bg"
                : "header_table_mob_items not_colored"
            }
          >
            <div className="table_top_items">
              {item.username.map((user, idx) => (
                <div key={idx} className="dflex_aicenter">
                  <img
                    src={user.user_avatar}
                    className="mr_12px"
                    alt="User Avatar"
                  />
                  <p className="table_main_text_styles">
                    {user.user_full_name}
                  </p>
                </div>
              ))}
              {item.game.map((game, idx) => (
                <div key={idx} className="dflex_aicenter left_20px">
                  <game.game_icon className="mr_12px" />
                  <p className="main_p_style">{game.game_name}</p>
                </div>
              ))}
            </div>
            <div className="table_bottom_items">
              <div className="bottom_table_item">
                <div className="btm_item_title">
                  <p className="main_p_style">Bet</p>
                </div>
                <div className="dflex_aicenter">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles">
                    {new Intl.NumberFormat("ru-RU").format(item.bet)}
                  </p>
                </div>
              </div>
              <div className="bottom_table_item">
                <div className="btm_item_title">
                  <p className="main_p_style">Time</p>
                </div>
                <p className="table_main_text_styles">{item.time}</p>
              </div>
              <div className="bottom_table_item">
                <div className="btm_item_title">
                  <p className="main_p_style">Multiplier</p>
                </div>
                <div className="dflex_aicenter">
                  <p className="table_main_text_styles">
                    {item.multiplier} <span>x</span>
                  </p>
                </div>
              </div>
              <div className="bottom_table_item">
                <div className="btm_item_title">
                  <p className="main_p_style">Payout</p>
                </div>
                <div className="dflex_aicenter payout_table_mob">
                  <RsCurrencyLogo className="mr_12px" />
                  <p className="table_main_text_styles">
                    {new Intl.NumberFormat("ru-RU").format(item.payout)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="show_more_btn">SHOW MORE</button>
      </div>
    </>
  );
}

export default HeaderTable;
