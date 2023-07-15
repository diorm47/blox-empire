import React from "react";
import "../header-table/header-table.css";

import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as LoadingIcon } from "../../assets/icons/refresh-icon.svg";
import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import inventory_1 from "../../assets/images/inventory-images/inventory-1.png";
import inventory_2 from "../../assets/images/inventory-images/inventory-2.png";
import inventory_3 from "../../assets/images/inventory-images/inventory-3.png";
import inventory_4 from "../../assets/images/inventory-images/inventory-4.png";
import { ReactComponent as Btm } from "../../assets/icons/card-item-btm.svg";
import rejected_icon from "../../assets/icons/rejected.png";
import "./profile-table.css";

function ProfileTable({ tableType }) {
  const columnTitles = ["ID", "Description", "Date & Time ", "Amount"];
  const DepositsColumnTitles = [
    "ID",
    "Replenish",
    "Date & Time",
    "Amount",
    "Status",
  ];

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
  const depositsdata = [
    {
      id: 176363,
      description: "Bitcoin",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Transaction",
    },
    {
      id: 17636123,
      description: "Etherium",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Successfully",
    },
    {
      id: 176363567,
      description: "Cashapp",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Transaction",
    },
    {
      id: 567567567,
      description: "Card",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Successfully",
    },
    {
      id: 35434567657,
      description: "Robux",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Rejected",
    },
    {
      id: 124567777,
      description: "Etherium",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Rejected",
    },
    {
      id: 23434658767,
      description: "Bitcoin",
      time: "25.05.22  16:15",
      amount: 2342,
      deposit_status: "Transaction",
    },
  ];
  const inventory = [
    {
      id: 1,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_1,
      isSelected: false,
      deposit_status: "In processing",
    },
    {
      id: 2,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_2,
      isSelected: true,
      deposit_status: "In processing",
    },
    {
      id: 3,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_3,
      isSelected: false,
      deposit_status: "In processing",
    },
    {
      id: 4,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_4,
      isSelected: false,
      deposit_status: "Successfully",
    },
    {
      id: 5,
      description: "Catrin Dia de Muertos Mask",
      cost: 199,
      image: inventory_1,
      isSelected: true,
      deposit_status: "Successfully",
    },
    {
      id: 6,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: inventory_2,
      isSelected: false,
      deposit_status: "Rejected",
    },
    {
      id: 7,
      description: "Catrin Dia de Muertos Mask",
      cost: 99,
      image: inventory_3,
      isSelected: false,
      deposit_status: "Rejected",
    },
    {
      id: 8,
      description: "Catrin Dia de Muertos Mask",
      cost: 19,
      image: inventory_4,
      isSelected: false,
      deposit_status: "Successfully",
    },
  ];

  return (
    <>
      {tableType === "history" ? (
        <>
          <table
            className="profile_table header_table mob_table"
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
                    <p className="table_main_text_styles">{item.description}</p>
                  </td>

                  <td>
                    <p className="table_main_text_styles">{item.time}</p>
                  </td>

                  <td className="border_radius_table">
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
          <div className="history_mobile_table">
            {data.map((item, id) => (
              <div
                className={
                  id % 2 === 0
                    ? "history_mobile_table_item mobile_table_template"
                    : "history_mobile_table_item mobile_table_template bg_tr"
                }
              >
                <div>
                  <p className="main_p_style">ID</p>
                  <p className="main_p_style">{item.id}</p>
                </div>
                <div>
                  <p className="main_p_style">Time and Date</p>
                  <p className="table_main_text_styles">{item.time}</p>
                </div>
                <div>
                  <p className="main_p_style">Amount</p>
                  <div className="dflex_aicenter">
                    <RsCurrencyLogo className="mr_12px" />
                    <p className="table_main_text_styles">
                      {new Intl.NumberFormat("ru-RU").format(item.amount)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="main_p_style">Description</p>
                  <p className="table_main_text_styles">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      {tableType === "deposits" ? (
        <>
          <table
            className="profile_table header_table mob_table"
            style={{ width: "100%", tableLayout: "fixed" }}
          >
            <thead>
              <tr>
                {DepositsColumnTitles.map((title, id) => (
                  <th className={id === 0 ? "left_20px" : ""} key={id}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {depositsdata.map((item, id) => (
                <tr
                  key={id}
                  className={id % 2 === 0 ? "colored_tr_bg" : "not_colored"}
                >
                  <td className="br_left">
                    <p className="main_p_style left_20px">{item.id}</p>
                  </td>
                  <td>
                    <p className="table_main_text_styles">{item.description}</p>
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
                  {item.deposit_status === "Transaction" ? (
                    <td className="border_radius_table">
                      <div className="dflex_aicenter transaction_status">
                        <LoadingIcon className="mr_12px" />
                        <p className="table_main_text_styles">
                          {item.deposit_status}
                        </p>
                      </div>
                    </td>
                  ) : (
                    ""
                  )}
                  {item.deposit_status === "Successfully" ? (
                    <td className="border_radius_table">
                      <div className="dflex_aicenter successfully_status">
                        <CheckedIcon className="mr_12px" />
                        <p className="table_main_text_styles">
                          {item.deposit_status}
                        </p>
                      </div>
                    </td>
                  ) : (
                    ""
                  )}
                  {item.deposit_status === "Rejected" ? (
                    <td className="border_radius_table">
                      <div className="dflex_aicenter rejected_status">
                        <img
                          src={rejected_icon}
                          alt="rejected icon"
                          className="mr_12px"
                        />

                        <p className="table_main_text_styles">
                          {item.deposit_status}
                        </p>
                      </div>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="history_mobile_table">
            {depositsdata.map((item, id) => (
              <div
                className={
                  id % 2 === 0
                    ? "history_mobile_table_item mobile_table_template"
                    : "history_mobile_table_item mobile_table_template bg_tr"
                }
              >
                <div>
                  <p className="main_p_style">ID</p>
                  <p className="main_p_style">{item.id}</p>
                </div>
                <div>
                  <p className="main_p_style">Time and Date</p>
                  <p className="table_main_text_styles">{item.time}</p>
                </div>
                <div>
                  <p className="main_p_style">Amount</p>
                  <div className="dflex_aicenter">
                    <RsCurrencyLogo className="mr_12px" />
                    <p className="table_main_text_styles">
                      {new Intl.NumberFormat("ru-RU").format(item.amount)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="main_p_style">Replenish</p>
                  <p className="table_main_text_styles">{item.description}</p>
                </div>
                {item.deposit_status === "Transaction" ? (
                  <div className="dflex_aicenter transaction_status mobile_status">
                    <LoadingIcon className="mr_12px" />
                    <p className="table_main_text_styles">
                      {item.deposit_status}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {item.deposit_status === "Successfully" ? (
                  <div className="dflex_aicenter successfully_status mobile_status">
                    <CheckedIcon className="mr_12px" />
                    <p className="table_main_text_styles">
                      {item.deposit_status}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {item.deposit_status === "Rejected" ? (
                  <div className="dflex_aicenter rejected_status mobile_status">
                    <img
                      src={rejected_icon}
                      alt="rejected icon"
                      className="mr_12px"
                    />

                    <p className="table_main_text_styles">
                      {item.deposit_status}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {tableType === "limiteds" ? (
        <div className="profile_limiteds">
          {inventory.map((inventory) => (
            <div key={inventory.id} className="modal_card_item">
              {inventory.deposit_status === "In processing" ? (
                <div className="dflex_aicenter transaction_status">
                  <LoadingIcon />
                  <p className="table_main_text_styles">
                    {inventory.deposit_status}
                  </p>
                </div>
              ) : (
                ""
              )}
              {inventory.deposit_status === "Successfully" ? (
                <div className="dflex_aicenter successfully_status">
                  <CheckedIcon />
                  <p className="table_main_text_styles">
                    {inventory.deposit_status}
                  </p>
                </div>
              ) : (
                ""
              )}
              {inventory.deposit_status === "Rejected" ? (
                <div className="dflex_aicenter rejected_status">
                  <img src={rejected_icon} alt="rejected icon" />

                  <p className="table_main_text_styles">
                    {inventory.deposit_status}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="card_img_temp">
                <img src={inventory.image} alt={inventory.image} />
              </div>
              <div className="temp_text">
                <p className="main_p_style">{inventory.description}</p>
              </div>
              <div className="nav_wallet_currency">
                <RsCurrencyLogo />
                <div>
                  <p>{inventory.cost}</p>
                </div>
              </div>
              <Btm className="btm_shadow" />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProfileTable;
