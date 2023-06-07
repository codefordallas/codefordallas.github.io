// import $ from 'jquery';

export default function clearNav(clickedNavStr) {
    // var nav = $('.header-nav-wrap');
    // nav.slideToggle();

    const navMenuIDs = {
      home: "navHome",
      about: "navAbout",
      projects: "navProjects",
      donations: "navDonations"
      // contact: "navContact"
    }
    for (var key in navMenuIDs) {
      document.getElementById(navMenuIDs[key]).classList.remove("current");
    }
    document.getElementById(clickedNavStr).classList.add("current");
}