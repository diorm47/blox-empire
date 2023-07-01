import React from "react";
import "../header-table/header-table.css";

import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";

function ProfileTable() {
  const columnTitles = ["ID", "Description", "Date & Time ", "Amount"];
  const data = [
  
    {
      id: 1464356999276,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 146435678976,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 1464356542336,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 1464356545676,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 14643565432276,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 1464236543276,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
    {
      id: 1464352543276,
      description: "Crash game deposit",
      time: "25.05.22  16:15",
      amount: 2342,
    },
  ];

  return (
    <table
      className="profile_table header_table"
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
              <p className="main_p_style left_20px">{item.id}</p>
            </td>
            <td>
              <p className="main_p_style">{item.description}</p>
            </td>

            <td>
              <p className="table_main_text_styles">{item.time}</p>
            </td>

            <td>
              <div className="dflex_aicenter">
                <RsCurrencyLogo className="mr_12px" />
                <p className="table_main_text_styles">
                  {new Intl.NumberFormat("ru-RU").format(item.amount)}
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProfileTable;
