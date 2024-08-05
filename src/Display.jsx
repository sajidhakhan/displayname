import React, { useState } from 'react';


function Display() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setError('');
    } else {
      setError('Both fields are required');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
        </div>
        <div  className='buttonSec'>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
      {fullName && <div className="full-name">Full Name: {fullName}</div>}
    </div>
  );
}

export default Display;
