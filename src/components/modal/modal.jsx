import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "../sign-in/sign-in.css";
import "../deposit/deposit.css";
import "./modal.css";

function Logout({ toggleLogoutModal }) {
  return (
    <div className="sign_in_modal deposit_modal">
      <div className="modal_bg" onClick={toggleLogoutModal}></div>

      <div className="sign_in_wrapper modal_styles logout_modal">
        <div className="block_nav">
          <div className="block_title">
            <h2>Do you want to logout?</h2>
          </div>
          <div className="close_icon" onClick={toggleLogoutModal}>
            <CloseIcon />
          </div>
        </div>
        <div className="logout_buttons">
          <button className="no_logout" onClick={toggleLogoutModal}>
            NO
          </button>
          <button className="yes_logout">YES</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
