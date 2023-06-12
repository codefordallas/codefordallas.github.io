/* eslint-disable */
// TODO: Turn back on eslint when this file is more ready to go.

import React from 'react';
import "./nav.css";
import Logo from "../Logo/Logo";
import $ from "jquery";

export default function Nav({ setActiveNavStr }) {
  const toggleOpen = (evt, navStr) => {
    console.log(`${navStr} menu option was clicked - setting activeNavStr`);
    setActiveNavStr(navStr);
    // evt.preventDefault();
    var toggleButton = $(".header-menu-toggle"),
      nav = $(".header-nav-wrap");

    if (toggleButton.is(":visible")) {
      nav.addClass("mobile");
      // if (nav.hasClass('mobile')) {
      //     toggleButton.toggleClass('is-clicked');
      //     nav.slideToggle();
      // }
      nav.slideToggle();
    }
    toggleButton.toggleClass("is-clicked");
    // window.location.replace(`/${navStr}`);
  };

  function scrollToTop() {
    // window.location.replace("/#");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToPos(idStr) {
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // const elemTop = document.querySelector(idStr).getBoundingClientRect().top;
    var elemTop = document.querySelector(idStr).getBoundingClientRect().top;
    // if (idStr === "navProjects") {
    //     elemTop = document.querySelector(idStr).getBoundingClientRect().top - 400;
    // }
    console.log(`elemTop:  ${elemTop}`);
    console.log(elemTop);
    window.scrollTo({
      top: elemTop + window.pageYOffset,
      behavior: "smooth",
    });
  }

  return (
    <header className="nav-header">
      <Logo />
      <nav className="header-nav-wrap">
        <ul id="headerNav" className="header-nav">
          <li
            id="navHome"
            className="current smoothscroll"
            title="Home"
            onClick={scrollToTop}
          >
            Home
          </li>
          <li
            id="navAbout"
            className="smoothscroll"
            title="About"
            onClick={(event) => {
              scrollToPos("#About");
              toggleOpen(event, "navAbout");
            }}
          >
            About
          </li>
          <li
            id="navProjects"
            className="smoothscroll"
            title="Projects"
            onClick={(event) => {
              scrollToPos("#Projects");
              toggleOpen(event, "navProjects");
            }}
          >
            Projects
          </li>
          <li
            id="navDonations"
            className="smoothscroll header_menu_link"
            title="Donations"
            onClick={(event) => {
              scrollToPos("#Donations");
              toggleOpen(event, "navDonations");
            }}
          >
            Donations
          </li>
          {/* <li id="navContact"
                        className="smoothscroll header_menu_link"
                        title="Contact"
                        onClick={(event) => {
                            scrollToPos('#Contact');
                            toggleOpen(event, "navContact")
                        }}
                    >Contact</li> */}
        </ul>
      </nav>
      <a
        className="header-menu-toggle"
        href="#home"
        onClick={(event) => {
          event.preventDefault();
          // toggleOpen(event, "Mobile Menu")
        }}
      >
        <span>Menu</span>
      </a>
    </header>
  );
}
