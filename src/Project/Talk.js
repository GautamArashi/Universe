import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='max-w-4xl mx-auto p-5 bg-slate-200'>
      <h1 className='text-2xl font-bold mb-5'>Let's Talk</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            className='border p-2'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className='border p-2'
          />
        </div>
        <div className='mb-4'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='border p-2 w-full'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <input
            type='text'
            name='company'
            placeholder='Company'
            value={formData.company}
            onChange={handleChange}
            className='border p-2'
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className='border p-2'
          />
        </div>
        <div className='mb-4'>
          <select
            name='budget'
            value={formData.budget}
            onChange={handleChange}
            className='border p-2 w-full'
          >
            <option value=''>Select Budget</option>
            <option value='2500-5000'>$2500-$5000</option>
            <option value='5000-10000'>$5000-$10000</option>
          </select>
        </div>
        <div className='mb-4'>
          <textarea
            name='description'
            placeholder='Tell us about your project...'
            value={formData.description}
            onChange={handleChange}
            className='border p-2 w-full h-40'
          ></textarea>
        </div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
