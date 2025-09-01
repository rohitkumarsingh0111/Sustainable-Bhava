import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Tales from '../assets/20230330_120209.jpg';
import './Contact.css';

const Contact = () => {
  // State for your original accordion
  const [activeCard, setActiveCard] = useState(null);
  
  // New state for handling form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Your original function for the accordion
  const toggleCard = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  // The new, corrected function for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        myForm.reset();
    })
    .catch((error) => {
        setSubmitMessage(`Sorry, there was an error sending your message. Please try again. Error: ${error.toString()}`);
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <Navbar />
      
      {/* === HERO SECTION (Unchanged) === */}
      <section className="hero" style={{ backgroundImage: `url(${Tales})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="pre-heading">Liked what we do?</h2>
          <h1 className="main-heading">Join Us Today</h1>
          <p className="sub-heading">Let's create a meaningful impact together!</p>
        </div>
      </section>

      {/* === MAIN CONTENT SECTION (Your original layout) === */}
      <div className="content-wrapper">
        <div className="contact-grid">
          
          {/* === YOUR ORIGINAL LEFT-SIDE COMPONENTS (Unchanged) === */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Reach out to us:</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                {/* All your contact links are here, unchanged */}
                <a href="tel:+91-7717357396" className="flex items-center text-lg hover:text-blue-700 transition-colors">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +91-7717357396
                </a>
                <a href="mailto:sustainablebhava@gmail.com" className="flex items-center text-lg hover:text-blue-700 transition-colors">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  info@sustainablebhava.org
                </a>
                <a href="https://www.instagram.com/sustainablebhava" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-700 transition-colors">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  @sustainablebhava
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Your original accordion cards are here, unchanged */}
              <div className={`info-card card-partner ${activeCard === 'partner' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('partner')}>
                  <span className="flex items-center">
                    <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.92M3 21v-1a6 6 0 015.197-5.92"></path></svg>
                    Partner with us
                  </span>
                  <span className="card-icon"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                </h3>
                <ul className="space-y-2"><li>Share resources and expertise</li><li>Collaborate for strategic synergies</li><li>Network and strengthen your brand</li></ul>
              </div>
              <div className={`info-card card-invite ${activeCard === 'invite' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('invite')}>
                  <span className="flex items-center">
                    <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    Invite us
                  </span>
                  <span className="card-icon"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                </h3>
                <ul className="space-y-2"><li>Conduct sessions in your academic institution</li><li>Get access to various learning resources</li><li>Motivate your students to think outside the box</li></ul>
              </div>
              <div className={`info-card card-join ${activeCard === 'join' ? 'active' : ''}`}>
                <h3 onClick={() => toggleCard('join')}>
                  <span className="flex items-center">
                    <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m6-10v-5a2 2 0 00-2-2h-.085a2 2 0 00-1.915 2.085L6 10m6 0h-6"></path></svg>
                    Join the team
                  </span>
                  <span className="card-icon"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                </h3>
                <ul className="space-y-2"><li>Get involved as a volunteer or trainer</li><li>Gain perks, certificates, and swags</li><li>Skill development and professional growth</li></ul>
              </div>
            </div>
          </div>

          {/* === THE CORRECTED CONTACT FORM (Right side) === */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
            <form id="contact-form" action="/" className="mt-6 space-y-6" name='contact_form' method='POST' data-netlify="true" onSubmit={handleFormSubmit}>
              <input type="hidden" name="form-name" value="contact_form" />
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="form-input mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="form-input mt-1" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" id="subject" required className="form-input mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows="4" required className="form-textarea mt-1"></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
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