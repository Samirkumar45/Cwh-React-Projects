// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import es6classNamees from './components/es6classNamees';

function App() {
  return (
    // <div classNameName="blank">Lonely</div>
    <>
      <Navbar title='TextUtils2' aboutText='About' />
      {/* // it is used for string purpose props */}

      {/* <Navbar title={3} aboutText="About"/> */}
      {/* <Navbar /> */}
      <div className='container my-3'>
        <TextForm heading='Enter the text to Analyse' />
      </div>
    </>
  );
}

export default App;
