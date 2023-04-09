import React from "react";
import renataAvatar from "../../assets/profile/renata.png";
import timAvatar from "../../assets/profile/tim.png";
import lanceAvatar from "../../assets/profile/lance.png";
import alfredoAvatar from "../../assets/profile/alfredo.png"

const Footer = (props) => (
   <footer>
      <div className={`content ${props.isMainPage ? "large" : "small"}`}>
         <span>Copyright @IIT(ISM) DHANBAD</span>
        
      </div>
    
   </footer>
);

Footer.defaultProps = {
   isMainPage: true
}

export default Footer;

