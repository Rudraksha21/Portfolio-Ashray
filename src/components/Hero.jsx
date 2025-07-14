import React from "react";
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/cropped_circle_image.png';

function Hero() {
  return (
    <div className={styles.HeroContainer}>
      <div className={`${styles["side-line"]} ${styles.left}`}></div>
      <div className={`${styles["side-line"]} ${styles.right}`}></div>
      
      <div className={styles["Hero-left"]}>
        <h3 id={styles.heading}>HI THERE !</h3>
        <h1>I'M <span className={styles["highlighted-name"]}>ASHRAY NAIK</span></h1>
        <h5 className={styles["h5-yellow"]}>Java Programmer / Web Developer</h5>
        <h5 className={styles["h5-black"]}>Always Happy to work with You</h5>
        <p>
          Hello! I'm Ashray Naik, a computer science graduate advancing my expertise through an MCA at Goa University. My passion lies at the intersection of technology and human understanding, where I explore the realms of artificial intelligence and machine learning. With a solid foundation in Python, C++, and Java, I thrive on tackling complex problems and crafting innovative solutions. My interest in psychology further fuels my curiosity, helping me appreciate the nuances of human behavior and design more intuitive, user-friendly applications.
        </p>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><button>MORE ABOUT ME</button></Link>
      </div>
      
      <div className={styles["Hero-right"]}>
        <img className={styles["image-Hero"]} src={heroImage} alt="Ashray" />
        <ul className={styles["circle-menu"]}>
          <li style={{ top: '-2%', left: '79%' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </li>
          <li style={{ top: '25%', left: '105%' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </li>
          <li style={{ top: '59%', left: '109%' }}><Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link></li>
          <li style={{ top: '90%', left: '93%' }}><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;