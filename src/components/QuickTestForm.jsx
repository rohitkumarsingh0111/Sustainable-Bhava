import React from 'react';

const QuickTestForm = () => {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>Netlify Form - Quick Test</h1>
      <p>This is a barebones form with no JavaScript submission logic. If this works, Netlify's basic form handling is configured correctly.</p>
      
      <form 
        name="quick-test-form" 
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* This hidden input is essential */}
        <input type="hidden" name="form-name" value="quick-test-form" />
        
        {/* Honeypot field for spam protection */}
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="test-message">Test Message:</label>
          <br />
          <textarea 
            id="test-message"
            name="message" 
            rows="4" 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#00C7B7', color: 'white', border: 'none' }}
        >
          Submit Test Form
        </button>
      </form>
    </div>
  );
};

export default QuickTestForm;