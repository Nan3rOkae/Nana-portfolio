import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo" width="20px" />
          ana Kofi Okae
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="uil uil-dialpad nav__icon"></i>Work
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li> */}
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setToggle(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
