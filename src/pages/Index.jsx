import React, { useEffect } from 'react';
import img from "../assets/Img/img.jpeg";
import '../index.css';

export const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }

    // Initialize Typed.js
    if (window.Typed) {
      new window.Typed('.typed', {
        strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
  }, []);

  return (
    <>
      <style>
        {`
          /* Bootstrap and Vendor Styles (loaded via CDN in index.html) */
          body {
            font-family: 'Roboto', sans-serif;
          }
          .header {
            background: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          .logo img {
            max-height: 40px;
            margin-right: 10px;
          }
          .sitename {
            font-size: 24px;
            font-weight: 700;
            color: #333;
          }
          .navmenu ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
          }
          .navmenu ul li a {
            color: #333;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.3s;
          }
          .navmenu ul li a:hover,
          .navmenu ul li a.active {
            color: #007bff;
          }
          .navmenu .dropdown {
            position: relative;
          }
          .navmenu .dropdown ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 10px;
            min-width: 200px;
          }
          .navmenu .dropdown:hover > ul {
            display: block;
          }
          .navmenu .dropdown .dropdown ul {
            top: 0;
            left: 100%;
          }
          .mobile-nav-toggle {
            font-size: 24px;
            cursor: pointer;
            display: none;
          }
          @media (max-width: 991px) {
            .mobile-nav-toggle {
              display: block;
            }
            .navmenu {
              display: none;
            }
            .navmenu.active {
              display: block;
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              background: #fff;
              padding: 15px;
            }
            .navmenu ul {
              flex-direction: column;
            }
          }
          .hero {
            background: #1a1a1a;
            color: #fff;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .hero img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
          }
          .hero h2 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .hero p {
            font-size: 24px;
          }
          .about {
            padding: 60px 0;
          }
          .about-info p {
            margin: 10px 0;
          }
          .skills-content h5 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .progress {
            margin-bottom: 20px;
          }
          .progress .skill {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 500;
          }
          .progress-bar-wrap {
            background: #e9ecef;
            height: 10px;
            border-radius: 5px;
            overflow: hidden;
          }
          .progress-bar {
            background: #007bff;
            height: 100%;
            transition: width 0.6s ease;
          }
          .about-me h4 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .about-me p {
            margin-bottom: 15px;
            line-height: 1.6;
          }
          .resume {
            padding: 60px 0;
            background: #f8f9fa;
          }
          .resume-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .resume-item {
            margin-bottom: 30px;
          }
          .resume-item h4 {
            font-size: 20px;
            font-weight: 600;
          }
          .resume-item h5 {
            font-size: 16px;
            color: #6c757d;
          }
          .resume-item ul {
            list-style: none;
            padding: 0;
          }
          .resume-item ul li {
            margin-bottom: 10px;
          }
          .section-title h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          @media (max-width: 576px) {
            .hero h2 {
              font-size: 32px;
            }
            .hero p {
              font-size: 18px;
            }
            .section-title h2 {
              font-size: 28px;
            }
          }
        `}
      </style>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src={img} alt="Hero" data-aos="fade-in" />
          <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <h2>
              I am <span className="hollow-text">Mayur Gaikwad</span>
            </h2>
            <div className="hero-text">
              <p>&lt; Software Developer /&gt;</p>
            </div>
            <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </div>
        </section>
      </main>
    </>
  );
};

