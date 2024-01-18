import React from "react";
import style from "./style.module.css";
import {
  faFacebook,
  faFontAwesome,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navElements}>
          <div className={style.icons}>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className={style.icon}>
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={style.icon}>
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.contactIcon}>
              <FontAwesomeIcon icon={faPhone} className={style.icon} />
              <p className={style.contactWith}>(+1) 234 5678 9101</p>
            </div>
            <div className={style.contactIcon}>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              <p className={style.contactWith}>shop@yourdomain.com</p>
            </div>
          </div>
        </div>
      </nav>

      <header className={style.header}>
        <div className={style.headerElement}>
          <div className={style.selling}>
            <h1>
              Selling <span>.</span>
            </h1>
          </div>
          <div className={style.listnavigate}>
            <ul className={style.lists}>
              <li className={style.list}>
                <Link to="/" className={style.link}>
                  Home
                </Link>
              </li>
              <li className={style.list}>
                <Link to="/addData" className={style.link}>
                  Add Data
                </Link>
              </li>
              <li className={style.list}>
                <Link to="/basket" className={style.link}>
                  Basket
                </Link>
              </li>
              <li className={style.list}>
                <Link className={style.link}>About Us</Link>
              </li>
              <li className={style.list}>
                <Link className={style.link}>Blog</Link>
              </li>
              <li className={style.list}>
                <Link className={style.link}>Special</Link>
              </li>
              <li className={style.list}>
                <Link className={style.link}>Contant</Link>
              </li>
            </ul>
          </div>
          <div className={style.menubar}>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
