import React from "react";
import styles from './About.module.css';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/cropped_circle_image.png';

function About() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img className={styles["img-about"]} src={aboutImage} alt="Ashray" />
        </div>

        {!isMobile && (
          <div className={styles["nav-bar"]}>
            <ul className={styles["left-ul"]}>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
              <li><Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
              <li><Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
            </ul>
          </div>
        )}

        {isMobile && (
          <div className={styles["mobile-menu"]}>
            <button onClick={() => setShowMenu(!showMenu)} className={styles["menu-button"]}>
              ☰
            </button>
            {showMenu && (
              <div className={styles["mobile-nav"]}>
                <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to="#" onClick={() => setShowMenu(false)}>About</Link>
                <Link to="/projects" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.centre}>
        <div className={styles["centre-about"]}>
          ABOUT <span className={styles.MeCentreName}>ME</span>
        </div>
        <div className={styles["centre-name"]}>
          I'M <span className={styles["centre-name-name"]}>Ashray Naik</span>, Java Programmer/Web Developer. 
        </div>
        <div className={styles["centre-desc"]}>
          I'm Ashray Naik, a computer science graduate advancing my expertise through MCA at Goa University. My passion lies at the intersection of technology and human understanding, where I explore the world of artificial intelligence and machine learning. My experience in developing applications in Java further enhances my ability to create practical, user-centric software. With a solid foundation in Python, C++, and Java, I thrive on tackling complex problems and crafting innovative solutions. My interest in psychology further fuels my curiosity, helping me appreciate the nuances of human behavior and design more intuitive, user-friendly applications.  
        </div>

        <div className={styles.educationContainer}>
          <h2 className={styles.sectionTitle}>E D U C A T I O N</h2>
          <div className={styles["education-box"]}>
            <div className={styles.educationItem}>
              <h3>Bachelor's in Computer Science</h3>
              <p className={styles.institute}>Govt College Khandola</p>
              <p>CGPA: <strong>9.24</strong></p>
              <p className={styles.duration}>2021 - 2024</p>
            </div>

            <div className={styles.educationItem}>
              <h3>Higher Secondary Education</h3>
              <p className={styles.institute}>Shantadurga Higher Secondary School</p>
              <p>Percentage: <strong>68%</strong></p>
              <p className={styles.duration}>2018 - 2020</p>
            </div>

            <div className={styles.educationItem}>
              <h3>Secondary Education</h3>
              <p className={styles.institute}>Shantadurga Higher School</p>
              <p>Percentage: <strong>90.5%</strong></p>
              <p className={styles.duration}>2008 - 2018</p>
            </div>

            <div className={styles.educationItem}>
              <h3>NCC (Junior Under Officer)</h3>
              <p>Certificates: A, B, C</p>
              <p>Duration: <strong>4 years</strong></p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>T E C H N I C A L &nbsp; S K I L L S</h2>
          <ul className={styles.skillsList}>
            <li><strong>Languages:</strong> Python, Java, C++, JavaScript</li>
            <li><strong>Frameworks:</strong> Express, Bootstrap</li>
            <li><strong>Libraries:</strong> Node.js, pandas, TensorFlow, NumPy</li>
            <li><strong>Certifications:</strong> Faculty Development Program in Deep Learning, Coursera Supervised Machine Learning</li>
          </ul>
        </div>

        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>E X P E R I E N C E</h2>
          <div className={styles.entry}>
            <h4>Content Management Services Intern - FroverLabs</h4>
            <p>Role: Strategizing, organizing, and optimizing content using CMS tools, analyzing content performance metrics, and collaborating with cross-functional teams to enhance user engagement.</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.nextButtonContainer}>
          <Link to="/projects" className={styles.nextButton}>
            Next <span className={styles.arrow}>→</span>
          </Link>
        </div>
        
        <ul className={styles["social-icons"]}>
          <li>
            <a href="https://www.linkedin.com/in/ashray-naik-912663226/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Rudraksha21" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/ru0r4k5h/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </li>
          <li>
            <a href="mailto:naiashray21@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;