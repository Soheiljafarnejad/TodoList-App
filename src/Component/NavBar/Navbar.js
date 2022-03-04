import { FiSettings } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiPieChart } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

import style from "./NavBar.module.css";
import img from "./img/git-dark.png";

const NavBar = ({ setToggle }) => {
  const clickHandler = () => {
    setToggle(false);
  };

  return (
    <section className={style.navBar}>
      <div className={style.container}>
        <div className={style.headerNav}>
          <a
            href="https://github.com/Soheiljafarnejad/TodoList-App.git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={style.profile}
              src={img}
              alt="profile-github"
              data-tip="GitHub"
              data-class="tooltip"
              data-place="right"
              data-offset="{'top': 10, 'right': 30}"
            />
          </a>
          <FiChevronLeft
            onClick={clickHandler}
            className={`${style.close} ${style.white}`}
            data-tip="Close"
            data-class="tooltip"
            data-place="left"
            data-offset="{'top': 10, 'left': 10}"
          />
          <ReactTooltip />
        </div>
        <div className={style.mainNav}>
          <h2 className={`${style.white} ${style.title}`}>Todo list</h2>
          <div className={style.icons}>
            <FiBookmark />
            <h3>Templates</h3>
          </div>
          <div className={style.icons}>
            <FiGrid />
            <h3>Categories</h3>
          </div>
          <div className={style.icons}>
            <FiPieChart />
            <h3>Analytics</h3>
          </div>
          <div className={style.icons}>
            <FiSettings />
            <h3>Settings</h3>
          </div>
        </div>
        <div className={style.footerNav}>
          <p>good</p>
          <h3 className={style.white}>consistency</h3>
          <span>© 2022 created by soheil jafarnejad</span>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
