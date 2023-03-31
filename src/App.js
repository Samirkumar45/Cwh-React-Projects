// import logo from './logo.svg';
// import './App.css';
import Aboutus from './components/Aboutus';
import { useState } from 'react';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Form } from 'react-router-dom';
// import es6classNamees from './components/es6classNamees';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    // <div classNameName="blank">Lonely</div>
    <>
      <Router>
        <Navbar title='TextUtils2' aboutText='About' />

        <Routes>
          {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route
            path='/'
            element={<TextForm heading='Enter the text to Analyse' />}
          />
          <Route exactly path='About' element={<Aboutus />} />
        </Routes>

        {/* <Alert alert='This is a Alert ' /> */}
        {/* // it is used for string purpose props */}
        {/* <Alert Alert='This is alert' /> */}
        {/* <Navbar title={3} aboutText="About"/> */}
        {/* <Navbar /> */}
        <div className='container my-3'>
          {/* <Aboutus /> */}
          {/* <Aboutus /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
