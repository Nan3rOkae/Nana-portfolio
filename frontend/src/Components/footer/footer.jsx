import React from "react";
import  './footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home">
          <h1 className="footer__title">Nana Kofi Okae</h1>
        </a>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Work
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/Nan3rOkae"
            className="footer__social-link"
            target="blank">
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nana-kofi-okae/"
            className="footer__social-link"
            target="blank">
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
