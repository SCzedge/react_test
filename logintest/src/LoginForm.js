import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('failed to login');
      setEmail('');
      setPassword('');
    }
  };

  const { from } = location.state || { from: { pathname: '/' } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <>
      <h1>login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type='text'
        placeholder='email'
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type='password'
        placeholder='password'
      />
      <button onClick={handleClick}>login</button>
    </>
  );
}
