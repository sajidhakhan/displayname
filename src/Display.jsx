import React, { useState } from 'react';

export const Display = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
        <div className='input1'>
          <label htmlFor="firstName">First Name : </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </div>
        <div className='input2'>
          <label htmlFor="lastName">Last Name : </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
        </div>
        <div className='buttonSec'>
          <button type="submit">Submit</button>
        </div>
      </form>
      {fullName && <div className="full-name">Full Name : {fullName}</div>}
    </div>
  )
}
