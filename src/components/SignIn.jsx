import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const backendURL = process.env.REACT_APP_BACKEND_URL;

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (response) => {
    const { credential } = response; // Google ID token

    try {
      const res = await fetch(`${backendURL}/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credential }),
      });

      if (res.ok) {
        const userData = await res.json();
        console.log('User data:', userData);
        // Save user data to session storage
        sessionStorage.setItem('user', JSON.stringify(userData));
        // Redirect to the Learn page after successful login
        navigate('/Learn');
      } else {
        console.error('Google login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => console.error('Google Login Failed')}
        useOneTap
        text="signin_with"
      />
    </div>
  );
};

export default SignIn;
