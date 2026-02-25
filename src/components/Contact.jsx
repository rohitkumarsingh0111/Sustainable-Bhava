import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Tales from '../assets/20230330_120209.jpg';
import './Contact.css';

const Contact = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleCard = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  // ✅ FINAL FORM HANDLER (FIXED)
const handleFormSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  const formData = new FormData(e.target);

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx_Kuvi8_qPyJ7F-NJpHxYFI_mdXpEUTI0nQ3EjpbC0pElU8LO6NqJy5sx2CzVFc288/exec',
      {
        method: 'POST',
        body: formData, // ✅ THIS IS THE KEY
      }
    );

    const text = await response.text();

    if (text === 'success') {
      setSubmitMessage('Thank you! Your message has been sent successfully ✅');
      e.target.reset();
    } else {
      setSubmitMessage('Server error ❌');
    }
  } catch (err) {
    console.error(err);
    setSubmitMessage('Network error ❌');
  }

  setIsSubmitting(false);
};


  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${Tales})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="pre-heading">Liked what we do?</h2>
          <h1 className="main-heading">Join Us Today</h1>
          <p className="sub-heading">Let's create a meaningful impact together!</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="content-wrapper">
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Reach out to us:</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <a href="tel:+91-7717357396" className="flex items-center text-lg hover:text-blue-700">
                  +91-7717357396
                </a>
                <a href="mailto:sustainablebhava@gmail.com" className="flex items-center text-lg hover:text-blue-700">
                  info@sustainablebhava.org
                </a>
                <a href="https://www.instagram.com/sustainablebhava" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-700">
                  @sustainablebhava
                </a>
              </div>
            </div>

            {/* ACCORDION */}
            <div className="space-y-6">
              <div className={`info-card ${activeCard === 'partner' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('partner')}>Partner with us</h3>
                <ul><li>Share resources</li><li>Collaborate</li></ul>
              </div>

              <div className={`info-card ${activeCard === 'invite' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('invite')}>Invite us</h3>
                <ul><li>Sessions</li><li>Resources</li></ul>
              </div>

              <div className={`info-card ${activeCard === 'join' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('join')}>Join the team</h3>
                <ul><li>Volunteer</li><li>Certificates</li></ul>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>

            <form className="mt-6 space-y-6" onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Full Name" required className="form-input" />
              <input type="email" name="email" placeholder="Email Address" required className="form-input" />
              <input type="text" name="subject" placeholder="Subject" required className="form-input" />
              <textarea name="message" rows="4" placeholder="Message" required className="form-textarea"></textarea>

              <button type="submit" disabled={isSubmitting} className="submit-button">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && <p className="mt-4 text-center font-medium">{submitMessage}</p>}
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;


