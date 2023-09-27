import React from 'react';
import {  BrowserRouter ,  Routes,  Route, } from 'react-router-dom';
import Login from './components/Login.js'
import Signup from './components/Signup.js';

function App() {
  return (
   <>
       <BrowserRouter>
        <Routes>
        <Route exact path='/Signup' element={<Signup />}></Route>  
        <Route exact path='/Login' element={ <Login/>}></Route>  
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
