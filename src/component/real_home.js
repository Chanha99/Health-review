
import Leg from './leg.js'
import Chest from './chest.js'
import Shoulder from './shoulder.js'
import Chest1 from './chest1.js'

import { Route, Routes, } from 'react-router-dom';
import Home from '../home';
// import Modal from './login';
import Home2 from './home2.js';
// import Menubar from './menubar.js';
import NotFound from '../test.js';
import Login from './login.js';


function R_Home () {
    return (
      <div>

        <Routes>
            <Route path="/" element={<Home2></Home2>}> 
              <Route path='' element={<Home/>}></Route>
            <Route path="/chest" element={<Chest></Chest>}></Route>
            <Route path="/chest1" element={<Chest1></Chest1>}></Route>
            <Route path="/leg" element={<Leg></Leg>}></Route>
            <Route path="/shoulder" element={<Shoulder></Shoulder>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="*" element={<NotFound />}> </Route>
      </Routes>
      </div>
    );
  };

  export default R_Home;