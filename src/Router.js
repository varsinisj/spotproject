// import React from 'react'
// import Login from './Pro/Login'
// import Register from './Pro/Register'
// import Home from './Pro/Home'
// import Availability from './Pro/Availability'
// import Mapsss from './Pro/Mapsss'
// import { BrowserRouter, Route,Routes } from 'react-router-dom'

// const Router = () => {
//   return (
//     <div>
//         <BrowserRouter>
//         <Routes>
//            <Route path='/' element={<Login/>}></Route>
//             <Route path='/Register' element={<Register/>}></Route>
//           <Route path='/Home' element={<Home/>}></Route>
//           <Route path='/Availability' element={<Availability/>}></Route>
//           <Route path='/Mapsss' element={<Mapsss/>}></Route>
//         </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default Router
// src/Router.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Availability from './Availability';
import Mapsss from './Mapsss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Availability' element={<Availability />} />
        <Route path='/Mapsss' element={<Mapsss />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
