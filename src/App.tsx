import React from 'react';

import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavLink to={'/'}> main </NavLink>
        <NavLink to={'/login'}> login </NavLink>
        <NavLink to={'/profile'}> profile </NavLink>
        <NavLink to={'/profile/settings'}> settings </NavLink>

        <Routes>
            <Route path={'/*'} element={<div>404</div>}/>
            <Route path={'/'} element={<div>main</div>}/>
            <Route path={'/login'} element={<div>login</div>}/>
        </Routes>
    </div>
  );
}

export default App;
