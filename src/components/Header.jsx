import { useContext, useState, useRef } from "react";
import { themeContext } from "../utils/themeContext.jsx";
import { BsArrowDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import resume from "../assets/files/Adam_David_React_Developer_Resume.pdf";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    if (isShowingMenu) {
      setIsShowingMenu(false);
      navRef.current.classList.add('mobile-hidden');
    } else {
      setIsShowingMenu(true);
      navRef.current.classList.remove('mobile-hidden');
    };
  };

  return(
    <header id="app-header" className={theme}>
      <button className="mobile-nav-btn" onClick={toggleMenu}>
        <RxHamburgerMenu size={30} />
      </button>
      <nav ref={navRef} className="mobile-hidden">
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#social">Social</a></li>
        </ul>
      </nav>
      <div className="btn-row">
        <button id="mode-btn" onClick={toggleTheme} className={theme === 'dark' ? 'dark-toggler' : 'light-toggler'}><div id="mode-indicator" className={`${theme === "light" ? "left" : "right"}`}></div></button>
        <button className={`resume-btn ${theme === 'dark' ? 'dark-rbtn' : 'light-rbtn'}`}>
          <a href={resume} download>résumé <BsArrowDown /></a>
        </button>
      </div>
    </header>
  )
}
export default Header;
