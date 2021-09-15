import React, { Component } from "react";

class AboutUsView extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Your order of 100$ or more gets free standard delivery.</p>
        <ul>
          <li>Standard delivered 4-5 Business Days</li>
          <li>Express delivered 2-4 Business Days</li>
        </ul>
        <p>
          Orders are processed and delivered Monday-Friday (excluding public
          holidays)
        </p>
        <p>
          No Returns/Replacements Allowed - Returns or replacements are not
          accepted by seller for this product. Cancellation allowed.
        </p>
      </React.Fragment>
    );
  }
}

export default AboutUsView;

//added About us page not currently working..