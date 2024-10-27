import React from "react";

import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Investor relations</li>
        <li>jobs</li>
        <li>terms and conditions</li>
        <li>legal notice</li>
        <li>cookie preferences</li>
        <li>corporate information</li>
        <li>contact us</li>
      </ul>
      <p className="copyright">@ 2022 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
