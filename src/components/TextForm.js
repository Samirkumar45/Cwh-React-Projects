import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was Clicked');
  };
  const [text, settext] = useState('Enter the text Here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea
          className='form-control'
          id='Mybox'
          value={text}
          rows='8'
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
