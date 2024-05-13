import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from './users.json'; // Import the user data

const App: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Find the user with the provided credentials
    const user = usersData.find(
      (user) => user.name === name && user.surname === surname && user.password === password
    );

    if (user) {
      console.log('Logged in successfully');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px', backgroundColor: '#ffffff', margin: '0' }}>
      <div style={{ width: '320px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: '#333333' }}>Welcome Back!</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
          <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '3px' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '5px' }} />
          <button type="submit" style={{ padding: '0.8rem', backgroundColor: '#4CAF50', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
          {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default App;
