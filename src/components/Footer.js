import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
        <h2>Hey there! 👋</h2>
        <p>Every great project begins with a conversation. I'm <strong>Akshay</strong>, a passionate <strong>Full Stack Developer</strong> ready to bring your ideas to life. Whether it's building web applications or solving complex problems, I’m here to help. Let’s discuss your project, and I’ll ensure we bring the right expertise to the table.</p>
          <button 
  type="submit" 
  className="footer-button" 
  onClick={() => window.location.href = 'mailto:akshaysri0844@gmail.com'}
><strong>Let's Collaborate!</strong>

</button>

        </div>
        <div className="footer-right">
          <div className="contact-info">
            <p>Email</p>
            <a href="mailto:akshaysri0844@gmail.com">akshaysri0844@gmail.com</a>
            <p>Phone</p>
            <a href="tel:+91-8318587784">(+91) 8318587784 </a>
            <p>Address</p>
            <p>#805 AGB Layout</p>
            <p>Bengaluru, India, 560090</p>
          </div>
          <div className="social-icons">
            <a href='https://github.com/aksh10207'><i className="fab fa-github"></i></a> 
            <a href='https://www.linkedin.com/in/akshay-07ak/'><i className="fab fa-linkedin"></i></a>
            <a href='https://x.com/aksh10207'><i className="fab fa-twitter"></i></a>
            <a href='https://www.instagram.com/a._k._s._h._a.y/?hl=en'><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
