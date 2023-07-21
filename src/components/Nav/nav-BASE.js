/* eslint-disable */
// TODO: Turn back on eslint when this file is more ready to go.

import React from "react";
// import './Nav.css';

export default function Nav({ setActiveNavStr }) {
  return (
    <header className="nav-header">
      <div className="header-logo">
        <img
          className="site-logo"
          src="/IMGs/white.png"
          alt="Homepage"
          onClick={scrollToTop}
        />
      </div>
      <nav className="header-nav-wrap">
        {" "}
        {/*<!-- see ssMobileMenu in main.js -->*/}
        <ul id="headerNav" className="header-nav">
          {/* <li id="navHome" className="current">
                        <a className="smoothscroll"  
                            href="#home" 
                            title="Home"
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                            onClick={(event) => toggleOpen(event, "navHome")}
                        >Home</a>
                    </li> */}
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
            // onClick={() => setTimeout(clearNav, timeoutMS, "navAbout")}
            onClick={(event) => {
              scrollToPos("#about");
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
              // setTimeout(clearNav, timeoutMS, "navXP"); /* could be removed if the spacing was right, maybe? */
            }}
          >
            Projects
          </li>
          <li
            id="navXP"
            className="smoothscroll"
            title="Experience"
            onClick={(event) => {
              scrollToPos("#XP");
              toggleOpen(event, "navXP");
              // setTimeout(clearNav, timeoutMS, "navXP"); /* could be removed if the spacing was right, maybe? */
            }}
          >
            Experience
          </li>
          <li
            id="navTestimonials"
            className="smoothscroll"
            title="Testimonials"
            // onClick={() => setTimeout(clearNav, timeoutMS, "navTestimonials")}
            onClick={(event) => {
              scrollToPos("#Testimonials2");
              toggleOpen(event, "navTestimonials");
            }}
          >
            Testimonials
          </li>
          <li
            id="navContact"
            className="smoothscroll"
            title="Contact"
            // onClick={() => setTimeout(clearNav, timeoutMS, "navContact")}
            onClick={(event) => {
              scrollToPos("#contact");
              toggleOpen(event, "navContact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      <a
        className="header-menu-toggle"
        href="#home"
        // onClick={(elem) => ssMobileMenu(elem)}
        onClick={(event) => {
          event.preventDefault();
          toggleOpen(event, "Mobile Menu");
        }}
      >
        <span>Menu</span>
      </a>
    </header>
  );
}
