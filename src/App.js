/*import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <Header handleTabChange={handleTabChange} />
      {currentTab === "Home" ? (
        <MainContent handleLoginClick={handleLoginClick} />
      ) : (
        <ContactUs />
      )}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input type="text" name="username" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;*/
import React, { useState } from 'react';
import logo from './Logo_color_Charitable_page-0001.jpg';
import './App.css';
import emailjs from 'emailjs-com'; // Import EmailJS

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_dyg3vrp', // Replace with your EmailJS service ID
      'template_7yvbtzq', // Replace with your EmailJS template ID
      e.target,
      'fXcfSwl7RdA-Hsd5p'      // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message, please try again.');
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Organization Logo" className="logo" />
          <span>Lucia Charitable</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn login-btn" onClick={openLoginModal}>Login</button>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <h1 className="home-title">Empowering Global Change</h1>
          <p className="home-description">
            Join Lucia Charitable in our mission to create lasting positive impact and improve lives around the world.
          </p>
          <a href="#projects" className="btn explore-btn">Explore Our Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>
          Lucia Charitable is dedicated to creating sustainable change and improving lives across the globe. Our mission is to empower communities through impactful projects in health, education, and environmental sustainability. We believe in the power of collaboration and innovation to drive positive transformation in underserved regions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2>Our Initiatives</h2>
        <div className="project-box">
          <h3>Education Empowerment</h3>
          <p>Providing access to quality education and resources for underprivileged children, paving the way for brighter futures.</p>
        </div>
        <div className="project-box">
          <h3>Clean Water Initiative</h3>
          <p>Implementing sustainable solutions to bring clean and safe drinking water to rural and underserved communities.</p>
        </div>
        <div className="project-box">
          <h3>Healthcare Outreach</h3>
          <p>Delivering essential medical services and health education to remote areas, improving overall community well-being.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Get Involved</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn send-btn">Send Message</button>
        </form>
      </section>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>Login</h2>
            <form className="login-form">
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn login-submit-btn">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


