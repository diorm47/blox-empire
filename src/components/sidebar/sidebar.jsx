import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as CrashLogo } from "../../assets/logos/sidebar-icons/crash.svg";
import { ReactComponent as CoinflipLogo } from "../../assets/logos/sidebar-icons/coinflip.svg";
import { ReactComponent as RouletteLogo } from "../../assets/logos/sidebar-icons/roulette.svg";
import { ReactComponent as UpgradeLogo } from "../../assets/logos/sidebar-icons/upgrade.svg";
import { ReactComponent as CasesLogo } from "../../assets/logos/sidebar-icons/cases.svg";
import { ReactComponent as MinesLogo } from "../../assets/logos/sidebar-icons/mines.svg";
import { ReactComponent as TowerLogo } from "../../assets/logos/sidebar-icons/tower.svg";
import { ReactComponent as PlinkoLogo } from "../../assets/logos/sidebar-icons/plinko.svg";
import { ReactComponent as DiscordLogo } from "../../assets/logos/sidebar-icons/discord.svg";
function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <div className="side_bar_links">
        <div className="side_bar_link_item">
          <NavLink to="/crash">
            <CrashLogo />
            <p>Crash</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/coinflip">
            <CoinflipLogo />
            <p>Coinflip</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/roulette">
            <RouletteLogo />
            <p>Roulette</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/upgrade">
            <UpgradeLogo />
            <p>Upgrade</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/cases">
            <CasesLogo />
            <p>Cases</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/mines">
            <MinesLogo />
            <p>Mines</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/tower">
            <TowerLogo />
            <p>Tower</p>
          </NavLink>
        </div>
        <div className="side_bar_link_item">
          <NavLink to="/plinko">
            <PlinkoLogo />
            <p>Plinko</p>
          </NavLink>
        </div>
      </div>
      <div className="sidebar_btm_discord">
        <div className="side_bar_link_item">
          <NavLink to="/discord">
            <DiscordLogo />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
