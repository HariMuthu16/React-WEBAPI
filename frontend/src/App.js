import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Shop from './component/Shop';
import Color from './component/Color';
import Form from './component/Form';
import Game from './component/Game';
import User from './component/User';
import Home from './component/Home';
import Employee from './component/Employee';

function App() {
  return (
    <div className="App">


    <Employee/>







    {/* <BrowserRouter>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/game"}>Game</Link></li>
      <li><Link to={"/color"}>Color</Link></li>
      <li><Link to={"/form"}>Form</Link></li>
      <li><Link to={"/user"}>User</Link></li>
    </ul>

     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/game' element={<Game/>}  />
      <Route path='/form' element={<Form/>}  />
      <Route path='/color' element={<Color/>}  />
      <Route path='/user' element={<User/>}  />
     </Routes>
    </BrowserRouter>


 */}







      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
