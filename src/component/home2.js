import Home from '../home';
import L_header from './login_home';
import {Outlet } from 'react-router-dom';


const Home2 = () => {
    return (
      <div>
        <L_header />
        <Home/>

      </div>
    );
  };

  export default Home2;