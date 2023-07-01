import React, { useState } from "react";
import "./sign-in.css";

import signin_img from "../../assets/images/sign-in-img.png";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons/password-icon.svg";

function SignIn({ toggleModal }) {
  const [affilate, setAffilate] = useState(false);
  return (
    <div className="sign_in_modal">
      <div className="modal_bg" onClick={toggleModal}></div>
      <div className="sign_in_wrapper">
        <div className="sign_in_left_img">
          <img src={signin_img} alt="sign in" />
        </div>
        <div className="sign_in_right">
          <div className="page_title">
            <h1>Sign in</h1>
            <div onClick={toggleModal}>
              <CloseIcon />
            </div>
          </div>
          <div className="sign_in_text">
            <p>
              In order for Bloxflip to operate correctly, we require access to
              your Roblox account.
              <br />
              <br />
              While normally asking for such would be considered malicious, we
              assure you that Bloxflip not only will protect your security but
              never use it without your permission!
            </p>
          </div>
          <div className="sign_in_form">
            <form action="#">
              <label htmlFor="roblex_username">Roblox username</label>
              <div className="sign_in_input">
                <UserIcon />
                <input
                  type="text"
                  placeholder="Your Roblox username here"
                  name="roblex_username"
                />
              </div>
              <label htmlFor="password">Password</label>
              <div className="sign_in_input">
                <PasswordIcon />
                <input type="text" name="password" placeholder="Password" />
              </div>

              {!affilate ? (
                <div className="affliate_code">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={() => setAffilate(true)}
                  />
                  <p>Affilate code</p>
                </div>
              ) : (
                <>
                  <label htmlFor="affilate">Affilate code</label>
                  <div className="sign_in_input">
                    <input
                      type="text"
                      placeholder="Code (optional)"
                      name="affilate"
                    />
                  </div>
                </>
              )}

              <input type="button" className="sign_submit_btn" value="LOGIN" />
            </form>
            <div className="form_terms">
                <p>By logging in you acknowledge that you are at least 18 years of age, that any items you wager are not stolen, and that you have read our <a href="#">Terms of conditions</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
