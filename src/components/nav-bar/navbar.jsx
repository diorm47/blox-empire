import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/profile/profile.css";
import "./navbar.css";
import { ReactComponent as Status1 } from "../../assets/icons/status-lvl-1.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout-icon.svg";

import { ReactComponent as NavLogo } from "../../assets/logos/main-logo.svg";
import { ReactComponent as HomeLogo } from "../../assets/logos/nav-icons/home.svg";
import { ReactComponent as AffilitiesLogo } from "../../assets/logos/nav-icons/affilities.svg";
import { ReactComponent as RewardsLogo } from "../../assets/logos/nav-icons/rewards.svg";
import { ReactComponent as EarnLogo } from "../../assets/logos/nav-icons/earn.svg";
import { ReactComponent as FaqLogo } from "../../assets/logos/nav-icons/faq.svg";
import { ReactComponent as TosLogo } from "../../assets/logos/nav-icons/tos.svg";
import { ReactComponent as SevenLogo } from "../../assets/logos/nav-icons/seven.svg";
import { ReactComponent as LiveLogo } from "../../assets/logos/nav-icons/live.svg";
import nav_logo_text from "../../assets/logos/nav-logo-text.png";
import user_avatar_img from "../../assets/images/user-avatar.png";
import { ReactComponent as DiscordLogo } from "../../assets/logos/sidebar-icons/discord.svg";

import { ReactComponent as VolumeIcon } from "../../assets/icons/volume-icon.svg";
import { ReactComponent as RsCurrencyLogo } from "../../assets/icons/rs-currency.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet-icon.svg";
import { ReactComponent as InventoryIcon } from "../../assets/icons/inventory-box.svg";

const Navbar = ({
  toggleModal,
  toggleDeposit,
  toggleWithDraw,
  isMobMenuVisible,
  setMobMenuVisible
}) => {
  return (
    <nav>
      <div className="nav_bar_wrapper">
        <div className="nav_left_menu">
          <NavLink to="/home">
            <div className="nav_logo">
              <NavLogo />
              <img src={nav_logo_text} alt="nav_logo_text" />
            </div>
          </NavLink>
          <div className="nav_links">
            <div className="nav_link_item">
              <NavLink to="/home">
                <HomeLogo /> <p>Home</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/affiliates">
                <AffilitiesLogo />
                <p>Affiliates</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/rewards">
                <RewardsLogo />
                <p>Rewards</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/earn">
                <EarnLogo /> <p>Earn</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/faq">
                <FaqLogo /> <p>F.A.Q</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/tos">
                <TosLogo /> <p>TOS</p>
              </NavLink>
            </div>
            <div className=" nav_slots_live">
              <NavLink to="/slots">
                <div className="nav_slots">
                  <SevenLogo />
                  <p>Slots</p>
                </div>
              </NavLink>
              <NavLink to="/live-casino">
                <div className="nav_live_casino">
                  <LiveLogo />
                  <p>Live Casino</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav_profile">
          <div className="nav_volume">
            <VolumeIcon />
            <div>
              <div></div>
            </div>
          </div>
          <div className="nav_wallet_block">
            <div className="nav_wallet_currency">
              <RsCurrencyLogo />
              <div>
                <p>
                  5 391<span>.68</span>
                </p>
              </div>
            </div>
            <div className="nav_wallet_actions">
              <div onClick={toggleDeposit}>
                <WalletIcon />
                <p>Deposit</p>
              </div>
              <div className="nav_withdraw" onClick={toggleWithDraw}>
                <p>Withdraw</p>
              </div>
            </div>
          </div>
          <NavLink to="/profile">
            <div className="user_profile_avatar" onClick={toggleModal}>
              <img src={user_avatar_img} alt="user avatar" />
            </div>
          </NavLink>
          <NavLink to="/inventory">
            <div className="nav_profile_inventory">
              <InventoryIcon />
            </div>
          </NavLink>
        </div>
        <div className="nav_mob_bottom_line"></div>
        <div
        onClick={() => setMobMenuVisible(!isMobMenuVisible)}
          className={
            isMobMenuVisible
              ? "nav_mobile_wrapper"
              : "nav_mobile_wrapper hided_menu"
          }
        >
          <div className="top_profile_items" >
            <NavLink to="/profile">
              <div className="profile_avatar">
                <Status1 />
                <img src={user_avatar_img} alt="user avatar" />
              </div>
            </NavLink>
            <div className="user_name_wallet">
              <div className="user_name">
                <p>Messai</p>
              </div>
              <div className="nav_wallet_currency">
                <RsCurrencyLogo />
                <div>
                  <p>
                    5 391<span>.68</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="logout_icon">
              <LogoutIcon />
            </div>
          </div>
          <div className="deposit_withdraw_mob">
            <button onClick={toggleDeposit}>Deposit</button>
            <button onClick={toggleWithDraw}>Withdraw</button>
          </div>
          <div className="nav_links">
            <div className="nav_link_item">
              <NavLink to="/affiliates">
                <AffilitiesLogo />
                <p>Affiliates</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/rewards">
                <RewardsLogo />
                <p>Rewards</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/earn">
                <EarnLogo /> <p>Earn</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/faq">
                <FaqLogo /> <p>F.A.Q</p>
              </NavLink>
            </div>
            <div className="nav_link_item">
              <NavLink to="/tos">
                <TosLogo /> <p>TOS</p>
              </NavLink>
            </div>
            <div className="nav_slots_live">
              <NavLink to="/slots">
                <div className="nav_slots">
                  <SevenLogo />
                  <p>Slots</p>
                </div>
              </NavLink>
              <NavLink to="/live-casino">
                <div className="nav_live_casino">
                  <LiveLogo />
                  <p>Live Casino</p>
                </div>
              </NavLink>
            </div>
          </div>
          <DiscordLogo className="mob_discord" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
