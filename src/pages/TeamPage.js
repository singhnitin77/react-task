import React from "react";
import ronaldo from "../assets/christiano.jpg";
import james from "../assets/james.jpg";
import "./TeamPage.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const TeamPage = () => {
  return (
    <div className="team section__padding">
      <p className="team-text-heading text-center container">
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great : )
      </p>

      <div className="container grid grid--5-cols">
        <div className="card">
          <img src={james} className="team-img" alt="image" />
          <div className="card-content">
            <p className="team-mem-name">Zidane</p>
            <p className="team-mem-work">Leadership and Management</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={james} className="team-img" alt="image" />
          <div className="card-content">
            <p className="team-mem-name">Toni Kroos</p>
            <p className="team-mem-work">Product Developer</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={james} className="team-img" alt="image" />
          <div className="card-content">
            <p className="team-mem-name">Iker Casillas</p>
            <p className="team-mem-work">Marketing Strategy</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={james} className="team-img" alt="image" />
          <div className="card-content">
            <p className="team-mem-name">James</p>
            <p className="team-mem-work">Product Designer</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={james} className="team-img" alt="image" />
          <div className="card-content">
            <p className="team-mem-name">Christiano</p>
            <p className="team-mem-work">Financial Operations</p>
            <div className="footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>
      </div>
      <p className="team-text-heading text-center container">and You : )</p>
    </div>
  );
};

export default TeamPage;
