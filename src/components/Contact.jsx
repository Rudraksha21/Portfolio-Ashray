import React from "react";
import styles from "./Contact.module.css";
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconContactForm from './contactme';
import contactImage from '../assets/cropped_circle_image.png';
function Contact(){
    return(
        <div className={styles.ContactMain}>
            {/* Left Panel */}
                  <div className={styles.left}>
                    <div className={styles.img}>
                      <img
                        className={styles["img-about"]}
                        src={contactImage}
                        alt="Ashray"
                      />
                    </div>
                    <div className={styles["nav-bar"]}>
                      <ul className={styles["left-ul"]}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="#">Contact</Link></li>
                      </ul>
                    </div>
                  </div>


                    <div className={styles.Centre}>
                        <IconContactForm/>
                    </div>









                  {/* Right Panel */}
                        <div className={styles.right}>
                          <ul className={styles["social-icons"]}>
                            <li><a href="https://www.linkedin.com/in/ashray-naik-912663226/"><FaLinkedin /></a></li>
                            <li><a href="https://github.com/Rudraksha21"><FaGithub /></a></li>
                            <li><a href="https://leetcode.com/u/ru0r4k5h/"><SiLeetcode /></a></li>
                            <li><a href="mailto:naiashray21@gmail.com"><FaEnvelope /></a></li>
                          </ul>
                        </div>
            
        </div>
    );
}

export default Contact;