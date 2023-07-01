import React from "react";
import "../header-table/header-table.css";

import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";

import table_img_1 from "../../assets/images/home-page-table/table-img-1.png";
import table_img_2 from "../../assets/images/home-page-table/table-img-2.png";
import table_img_3 from "../../assets/images/home-page-table/table-img-3.png";
import table_img_4 from "../../assets/images/home-page-table/table-img-4.png";

function AffliateTable() {
  const columnTitles = ["Username", "Total wager", "Date & Time "];
  const data = [
    {
      id: 0,
      username: [
        {
          user_full_name: "Darlene Robertson",
          user_avatar: table_img_1,
        },
      ],
      time: "25.05.22  16:15",
      bet: 182,
    },
    {
      id: 2,
      username: [
        {
          user_full_name: "Kathryn Murphy",
          user_avatar: table_img_2,
        },
      ],
      time: "25.05.22  16:15",
      bet: 233,
    },
    {
      id: 3,
      username: [
        {
          user_full_name: "Theresa Webb",
          user_avatar: table_img_3,
        },
      ],
      time: "25.05.22  16:15",
      bet: 233,
    },
    {
      id: 4,
      username: [
        {
          user_full_name: "Leslie Alexander",
          user_avatar: table_img_4,
        },
      ],
      time: "25.05.22  16:15",
      bet: 567,
    },
    {
      id: 10,
      username: [
        {
          user_full_name: "Darlene Robertson",
          user_avatar: table_img_1,
        },
      ],
      time: "25.05.22  16:15",
      bet: 182,
    },
    {
      id: 12,
      username: [
        {
          user_full_name: "Kathryn Murphy",
          user_avatar: table_img_2,
        },
      ],
      time: "25.05.22  16:15",
      bet: 233,
    },
    {
      id: 13,
      username: [
        {
          user_full_name: "Theresa Webb",
          user_avatar: table_img_3,
        },
      ],
      time: "25.05.22  16:15",
      bet: 233,
    },
    {
      id: 14,
      username: [
        {
          user_full_name: "Leslie Alexander",
          user_avatar: table_img_4,
        },
      ],
      time: "25.05.22  16:15",
      bet: 567,
    },

  ];

  return (
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
              {item.username.map((user, idx) => (
                <div key={idx} className="dflex_aicenter left_20px">
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
              <div className="dflex_aicenter">
                <RsCurrencyLogo className="mr_12px" />
                <p className="table_main_text_styles">
                  {new Intl.NumberFormat("ru-RU").format(item.bet)}
                </p>
              </div>
            </td>
            <td>
              <p className="main_p_style">{item.time}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AffliateTable;
