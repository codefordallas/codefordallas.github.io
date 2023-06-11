// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Waypoint } from "react-waypoint";

import clearNav from "./components/Nav/clearNavFunc";

import Header from "./components/Header/header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Donations from "./components/Donations/Donations";

import { useDetectScroll } from "@smakss/react-scroll-direction"; // https://stackoverflow.com/a/62497293/10474024
import Footer from "./components/Footer/Footer";

function App() {
  const [activeNavStr, setActiveNavStr] = useState("navHome");
  const [navClickedStr, setNavClickedStr] = useState("");
  const [scrollDir] = useDetectScroll({});

  useEffect(() => {
    // --- Original working section used for nav scrolling ---
    const navSec = document.getElementsByClassName("nav-header")[0];
    const sticky = document.getElementById("Header").offsetHeight - 30; // cannot use hook - otherwise it re-renders

    // const fadeInTime = 400;
    // const fadeOutTime = 400;

    const scrollCallBack = window.addEventListener("scroll", () => {
      // this is the scroll listener to stick menu
      if (window.pageYOffset > sticky) {
        navSec.classList.add("sticky");
        navSec.classList.add("offset");
        navSec.classList.add("scrolling");
      } else {
        navSec.classList.remove("sticky");
        navSec.classList.remove("offset");
        navSec.classList.remove("scrolling");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  });

  // const [aboutY, setAboutY] = useState();

  // const setStickyNum = () => {
  //   const aboutOffset = document.getElementById("About").offsetTop - 100;  // height on which the button will show
  //   // document.getElementById("Header").offsetHeight - 30
  //   setAboutY(aboutOffset);
  //   console.log(aboutOffset);
  // };

  // useEffect(() => {
  //   setStickyNum();
  // }, []);

  function wpDance(
    wpType,
    wpNum,
    loc,
    prevWPpos,
    currWPpos,
    evt,
    wpTop,
    vpTop,
    vpBtm,
    data
  ) {
    console.log(`activeNavStr:  ${activeNavStr}`);
    console.log(`navClickedStr:  ${navClickedStr}`);

    const destination = data.dest;
    if (scrollDir === "down") {
      console.log(
        `WP${wpNum} ${wpType} (${loc}) |  scrollDir: ${scrollDir}  ---> going into ${destination}`
      );
    }
    // else if ( scrollDir === "still" ) {

    // }
    else {
      console.log(
        `WP${wpNum} ${wpType} (${loc}) |  scrollDir: ${scrollDir}  ---> likely the start`
      );
    }

    const intPrevNavStr = data.prev;
    console.log(
      `WP${wpNum} ${wpType} (${loc}) | intPrevNavStr: ${intPrevNavStr}`
    );
    let intActiveNavStr;
    if (navClickedStr === "") {
      intActiveNavStr = data.curr;
    } else {
      intActiveNavStr = navClickedStr;
    }

    console.log(
      `WP${wpNum} ${wpType} (${loc}) | intActiveNavStr: ${intActiveNavStr}`
    );
    console.log(intActiveNavStr);
    // const intNextNavStr = data.next;
    // console.log(`WP${wpNum} ${wpType} (${loc}) | intNextNavStr: ${intNextNavStr}`);

    // getLIelems("headerNav", "li");

    console.log(
      `WP${wpNum} ${wpType} (${loc}) |  previousPosition: ${prevWPpos}`
    );
    console.log(
      `WP${wpNum} ${wpType} (${loc}) |  currentPosition: ${currWPpos}`
    );
    if (!evt) {
      console.log(
        `=============== WP${wpNum} ${wpType} (${loc}) | This came from a menu click? (likely just the start of site here) ===============`
      );
    }
    console.log(`WP${wpNum} ${wpType} (${loc}) |  event: ${evt}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  waypointTop: ${wpTop}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  viewportTop: ${vpTop}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  viewportBottom: ${vpBtm}`);

    if (scrollDir === "down" || scrollDir === "up") {
      if (intPrevNavStr !== intActiveNavStr) {
        console.log("updating 'React globals'");
        // // setNavSecs(intPrevNavStr, intActiveNavStr);
        // setPrevNavStr(intPrevNavStr);
        // // setPrevActiveNav(document.getElementById(intPrevNavStr));

        setActiveNavStr(intActiveNavStr);
        // setActiveNav(document.getElementById(intActiveNavStr));

        // setNextActiveNav(document.getElementById(intNextNavStr));

        // console.log(`WP${wpNum} ${wpType} (${loc}) prev (uncertain if updated): ${prevActiveNav}`);
        // console.log(prevActiveNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) active (uncertain if updated): ${activeNav}`);
        // console.log(activeNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) next (uncertain if updated): ${nextActiveNav}`);
        // console.log(nextActiveNav);

        console.log(
          `SEtting NAv classes with ${intPrevNavStr} and ${intActiveNavStr}`
        );

        // let temp = document.getElementById(intPrevNavStr);
        // console.log(temp);
        // document.getElementById(intPrevNavStr).classList.remove("current");

        let temp = document.getElementById(intActiveNavStr);
        console.log(temp);
        document.getElementById(intActiveNavStr).classList.add("current");

        // console.log(`WP${wpNum} ${wpType} (${loc}) prev nav (NOT updated):`, prevActiveNav); // I don't think this is showing the most recent update yet
        // console.log(`WP${wpNum} ${wpType} (${loc}) active nav (NOT updated):`, activeNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) next (uncertain if updated): ${nextActiveNav}`);

        // // final check if linked clicked
        // const currentURL = window.location.href;
        // console.log(`WP${wpNum} ${wpType} (${loc}) | Current URL:  ${currentURL}`)

        // const navMenuIDs = {
        //   "#home": "navHome",
        //   "#about": "navAbout",
        //   "#XP": "navXP",
        //   "#Testimonials2": "navTestimonials",
        //   "#contact": "navContact"
        // }
        // if (currentURL.includes("#")) {
        //   console.log(`WP${wpNum} ${wpType} (${loc}) | lastNav URL:  ${lastNav}`)

        //   if (clickedBool) {
        //     console.log(`WP${wpNum} ${wpType} (${loc}) | A LINK WAS CLICKED!!! Must update NAV`);
        //     for (const [key, val] of Object.entries(navMenuIDs)) {
        //       if (currentURL.includes(key)) {
        //           // found = true;for (var key in navMenuIDs) {
        //           document.getElementById(val).classList.add("current");
        //           setClickedBool(false);
        //           setLastNav(key);
        //           console.log(`WP${wpNum} ${wpType} (${loc}) | only active nav should be ${key}`);
        //       } else {
        //         document.getElementById(val).classList.remove("current");
        //       }
        //     }
        //   }
        //   else {
        //     console.log(`WP${wpNum} ${wpType} (${loc}) | No link cancelled - just moving through with last nav @ ${lastNav} ...`);
        //   }

        //   // if (currentURL.includes(lastNav)) {
        //   //   if (clickedBool) {
        //   //     console.log("A LINK WAS CLICKED!!!");
        //   //     setClickedBool(false);
        //   //     // let found = false;
        //   //     for (const [key, val] of Object.entries(navMenuIDs)) {
        //   //       if (currentURL.includes(key)) {
        //   //         // found = true;for (var key in navMenuIDs) {
        //   //         document.getElementById(val).classList.add("current");
        //   //       } else {
        //   //         document.getElementById(val).classList.remove("current");
        //   //       }

        //   //     }
        //   //   }
        //   // } else {

        //   // }
        // }
        clearNav(intActiveNavStr);
      }
    }
  }

  return (
    <div className="App">
      <Header setActiveNavStr={setActiveNavStr} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. YAY
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Waypoint // WP0 - between #Header and #About
        onEnter={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          // console.log("isntantiation - setting active nav to navHome");
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up from bottom
              data = {
                prev: "navHome",
                curr: "navHome",
                dest: "about section",
              };
            } else {
              // SCROLLING UP - line is coming down from top
              data = {
                prev: "navAbout",
                curr: "navHome",
                dest: "home section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              0,
              "after header / before About",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              0,
              "after header / before About",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
            setNavClickedStr("");
          }
        }}
        onLeave={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up past top
              data = {
                prev: "navHome", // navHome?
                curr: "navAbout",
                dest: "projects section",
              };
            } else {
              // SCROLLING UP - line is coming down past bottom
              data = {
                prev: "navAbout",
                curr: "navHome",
                dest: "home section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              0,
              "after Header / before About",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              0,
              "after Header / before About",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          }
        }}
      />
      <About />
      <Waypoint // WP1 - between #About and #Projects
        onEnter={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          // console.log("isntantiation - setting active nav to navHome");
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up from bottom
              data = {
                prev: "navAbout",
                curr: "navAbout",
                dest: "projects section",
              };
            } else {
              // SCROLLING UP - line is coming down from top
              data = {
                prev: "navDonations",
                curr: "navProjects",
                dest: "about section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              1,
              "after About / before Projects",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              1,
              "after About / before Projects",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
            setNavClickedStr("");
          }
        }}
        onLeave={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up past top
              data = {
                prev: "navProjects", // navHome?
                curr: "navDonations",
                dest: "footer section",
              };
            } else {
              // SCROLLING UP - line is coming down past bottom
              data = {
                prev: "navProjects",
                curr: "navAbout",
                dest: "about section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              1,
              "before Projects",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              1,
              "before Projects",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          }
        }}
      />
      <Projects />
      <Waypoint // WP2 - between #Projects and #Donations
        onEnter={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          // console.log("isntantiation - setting active nav to navHome");
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up from bottom
              data = {
                prev: "navAbout",
                curr: "navProjects", // currently too short of a site to have this be navProjects onEnter
                dest: "footer section",
              };
            } else {
              // SCROLLING UP - line is coming down from top
              data = {
                prev: "navDonations",
                curr: "navProjects",
                dest: "about section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              2,
              "after About / before Projects",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              2,
              "after About / before Projects",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
            setNavClickedStr("");
          }
        }}
        onLeave={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up past top
              data = {
                prev: "navProjects", // navHome?
                curr: "navDonations",
                dest: "footer section",
              };
            } else {
              // SCROLLING UP - line is coming down past bottom
              data = {
                prev: "navProjects",
                curr: "navAbout",
                dest: "header section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              2,
              "after About / before Donations",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              2,
              "after About / before Donations",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          }
        }}
      />
      <Donations />
      <Waypoint // WP3 - between #Donations and #Footer
        onEnter={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          // console.log("isntantiation - setting active nav to navHome");
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up from bottom
              data = {
                prev: "navProjects",
                curr: "navDonations", // currently too short of a site to have this be navDonations onEnter
                dest: "footer section",
              };
            } else {
              // SCROLLING UP - line is coming down from top
              data = {
                prev: "navDonations",
                curr: "navDonations",
                dest: "projects section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              3,
              "after Donations / before Footer",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OE",
              3,
              "after Donations / before Footer",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
            setNavClickedStr("");
          }
        }}
        onLeave={({
          previousPosition,
          currentPosition,
          event,
          waypointTop,
          viewportTop,
          viewportBottom,
        }) => {
          let data = null;
          if (!navClickedStr) {
            if (scrollDir === "down" || scrollDir === "still") {
              // line is going up past top
              data = {
                prev: "navDonations", // navHome?
                curr: "navDonations",
                dest: "footer section",
              };
            } else {
              // SCROLLING UP - line is coming down past bottom
              data = {
                prev: "navDonations",
                curr: "navProjects",
                dest: "about section",
              };
            }
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              3,
              "after Donations / before Footer",
              previousPosition,
              currentPosition,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          } else {
            console.log("Calling the wpDance ...");
            wpDance(
              "OL",
              3,
              "after Donations / before Footer",
              activeNavStr,
              navClickedStr,
              event,
              waypointTop,
              viewportTop,
              viewportBottom,
              data
            );
          }
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
