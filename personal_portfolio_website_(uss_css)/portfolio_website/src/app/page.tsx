"use client";
import { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Graphic Designer", "Video Editor", "Frontend Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount to prevent memory leaks
    };
  }, []);



  return (
    <div>

      <section className="home" id="home">
        <div className="home_content">
          <h3>Hi, Myself</h3>
          <h1>Ume Farwa</h1>
          <h3>And I am <span className="multiple-text"></span></h3>
          <p>I am a creative professional specializing in graphic design, video editing, and frontend development. With a keen eye for detail and a passion for aesthetics, I craft visually compelling designs, engaging content, and seamless digital experiences that captivate audiences and bring ideas to life with innovation and precision.</p>

          <a href="/Ume Farwa Resume.pdf" target="_blank" className="btn">
            Download My Resume
          </a>
        </div>

        <div className="home_img">
          <img src="/profile_img.png" alt="Profile Image" />
        </div>
      </section>



      <section className="about" id="about">
        <div className="about-img">
          <img src="/about_img.PNG" alt="About Image"></img>
        </div>

        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Graphic Designer</h3>
          <p>I am a passionate graphic designer, video editor, and frontend developer dedicated to crafting visually stunning and user-friendly experiences. With expertise in design, motion, and coding, I transform ideas into reality, ensuring every project is creative, engaging, and impactful. My goal is to blend creativity with functionality seamlessly.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>



      <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-bezier-curve"></i>
            <h3>Graphic Designing</h3>
            <p>Creating visually compelling designs that communicate ideas effectively and leave a lasting impression.</p>
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-photo-film"></i>
            <h3>Video Editing</h3>
            <p>Crafting engaging and high-quality video content that tells a story and captivates the audience.</p>
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Frontend Development</h3>
            <p>Building responsive, user-friendly, and visually appealing websites for seamless digital experiences.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>



      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="port_img1.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Social Media Posts Design</h1>
              <p>Creating visually appealing and engaging social media posts to boost brand presence and audience engagement.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="port_img2.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Poster Design</h1>
              <p>Designing impactful and creative posters that effectively communicate messages and capture audience attention.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="port_img3.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Flyer Design</h1>
              <p>Designing eye-catching and informative flyers that effectively promote brands, events, and businesses.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="port_img4.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Banner Design</h1>
              <p>Creating visually striking banners that enhance brand visibility and effectively convey messages.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="port_img5.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Book Cover Design</h1>
              <p>Designing captivating book covers that reflect the story, attract readers, and leave a lasting impression.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="port_img6.jpeg" alt="Image 1" />
            <div className="portfolio-layer">
              <h1>Certificate Design</h1>
              <p>Designing professional and elegant certificates that recognize achievements with style and authenticity.</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>

        </div>
      </section>



      <section className="contact" id="contact">
  <h2 className="heading">Contact <span>Me</span></h2>

  <form action="https://formsubmit.co/umef9167@gmail.com" method="POST">
    <div className="input-box">
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
    </div>

    <div className="input-box">
      <input type="number" name="phone" placeholder="Mobile Number" required />
      <input type="text" name="subject" placeholder="Email Subject" required />
    </div>

    <textarea name="message" cols={30} rows={10} placeholder="Your Message" required></textarea>

    <input type="hidden" name="_captcha" value="false" />
    <input type="submit" value="Send Message" className="btn" />
  </form>
</section>




      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 by @Ume-Farwa | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home"><i className="fa-solid fa-angle-up"></i></a>
        </div>
      </footer>

      

    </div>
  );
}
