// src/components/LoginForm.jsx
import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm({ onSubmit, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <div className='login-container fade-in'>
      <h2 className='login-title'>Bem-Vindo</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          className='login-input'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          className='login-input'
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className='login-error'>{error}</div>}
        <button type='submit' className='login-button'>
          Entrar
        </button>
      </form>
    </div>
  );
}
