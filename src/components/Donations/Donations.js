import React from "react";
import "./Donations.css";

const Donations = () => {
  return (
    <section id="Donations">
      <h1>How To Donate</h1>
      <p>This is the donations section!</p>
      <div>
        <div className="btn">
          <a href="https://opencollective.com/open-dallas/contribute">
            Link to Donation Page
          </a>
        </div>
        <div>
          Looking to support us? Click the button to see our donation page:
        </div>
      </div>
    </section>
  );
};

export default Donations;
