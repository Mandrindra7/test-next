import React from "react";

import "@/assets/css/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <span className="paragraph">
        <a className="link">Get in touch with our support team</a> if you have
        any question or want to leave some feedback.
        <br /> We’ll be happy to hear from you.
      </span>
      <span className="line"></span>
      <div className="nav">
        <span className="item">Terms & Conditions</span>
        <span className="item">Privacy Policy</span>
        <span className="item">FAQ</span>
        <span className="item">Contact Us</span>
      </div>
    </div>
  );
};

export default Footer;
