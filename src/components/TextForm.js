import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was Clicked' + text);
    const newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleOnChange = (event) => {
    console.log('Uppercase was Clicked');
    settext(event.target.value);
  };
  const handleLoClick = () => {
    const oldtext = text.toLowerCase();
    settext(oldtext);
  };
  const handleClearClick = () => {
    const capi = ' ';
    settext(capi);
  };
  const handlefirstcaoClick = () => {
    const opni = text.concat(text);
    settext(opni);
  };
  const [text, settext] = useState(' ');
  // const [text, settext] = useState('Enter the text Here');
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='Mybox'
            value={text}
            onChange={handleOnChange}
            rows='8'
          ></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className='btn btn-primary mx-3' onClick={handleClearClick}>
          clear
        </button>
        <button className='btn btn-primary' onClick={handlefirstcaoClick}>
          concat text
        </button>
      </div>

      <div className='container my-3'>
        <h1>Your text Summary</h1>
        <p>
          {text.split(' ').length} Words and {text.length} characters
        </p>
        <p> {0.008 * text.split(' ').length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
