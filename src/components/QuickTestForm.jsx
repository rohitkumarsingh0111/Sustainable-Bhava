import React from 'react';

const QuickTestForm = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Quick Form Test</h1>
      <form name="quick-test-form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="quick-test-form" />
        <p>
          <label>Message: <input type="text" name="message" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default QuickTestForm;