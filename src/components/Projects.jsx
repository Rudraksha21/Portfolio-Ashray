// Projects.jsx
import React from "react";
import styles from './Projects.module.css';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import all project images
import liveVisionImg from '../assets/livevision.png';
import signLanguageImg from '../assets/sign1.png';
import goaReviveImg from '../assets/goaaaa(1).png';
import eskoolImg from '../assets/Eskool2.png';
import studDocsImg from '../assets/studDocs.png';
import profileImg from '../assets/cropped_circle_image.png';
const projects = [
  {
    title: "Live Vision Android App",
    description: "Developed an Android application that enhances accessibility for the visually impaired through Real-Time Object Detection and supports cognitive development in children under 3 using Speech Synthesis as output.",
    image: liveVisionImg,
    tech: ["Android Studio", "YOLO V4", "Firebase"],
    links: {
      report: "#",
      research: "#"
    }
  },
  {
    title: "Bidirectional Sign Language Translator",
    description: "Developed a Bidirectional Sign Language Translator capable of translating sign language gestures into spoken words (Sign-to-Voice) and converting voice input into sign gestures (Voice-to-Sign).",
    image: signLanguageImg,
    tech: ["Python", "Google Teachable Machine", "Speech Recognition" , "OpenCV" ],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "Goa Revive | Garbage Collection Platform",
    description: "Developed a web platform that allows users to report garbage issues by uploading photos of garbage in their locality. The system sends notifications about upcoming garbage collection schedules and updates on events like garbage collection and cleanliness drives. Admins can review submissions and coordinate with local authorities for timely action.",
    image: goaReviveImg,
    tech: ["React", "Firebase", "Node.js"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "ESKOOL - (Student Management App)",
    description: "Developed a Student Management App with features like Live Chat, Assignment Submissions, Books Library, and Attendance Management with admin privileges to teaching staff.",
    image: eskoolImg,
    tech: ["Android Studio", "Firebase"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "StudDocs",
    description: "An online Platform where students can post their personalised notes and get rewards based on the likes and downloads by other users. Students can also search based on the keywords.",
    image: studDocsImg,
    tech: ["React", "MongoDB", "Express"],
    links: {
      code: "#",
      demo: "#"
    }
  }
];

function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 340; // slightly more than card width to adjust spacing
  if (direction === 'left') {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function Projects() {
  return (
    <div className={styles.ProjectsMain}>
      {/* Left Panel */}
      <div className={styles.left}>
        <div className={styles.img}>
          <img
            className={styles["img-about"]}
            src={profileImg}
            alt="Ashray"
          />
        </div>
        <div className={styles["nav-bar"]}>
          <ul className={styles["left-ul"]}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Center Carousel Section */}
      <section className={styles.projectsSection} id="projects">
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} id="carousel">
            {projects.map((proj, index) => (
              <div key={index} className={styles.card}>
                <img src={proj.image} alt={proj.title} className={styles.image} />
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <p className={styles.description}>{proj.description}</p>
                <div className={styles.tags}>
                  {proj.tech.map((tech, idx) => (
                    <span key={idx} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {/* {proj.links.code && <a href={proj.links.code}>🔗 Code</a>}
                  {proj.links.demo && <a href={proj.links.demo}>🔗 Demo</a>}
                  {proj.links.report && <a href={proj.links.report}>📄 Report</a>}
                  {proj.links.research && <a href={proj.links.research}>🧪 Research</a>} */}
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </section>

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

export default Projects;