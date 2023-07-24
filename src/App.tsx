import React from 'react';

import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

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
                {/*1- Method*/}
                {/*<Route path={'/profile/*'} element={(*/}
                {/*    <div>*/}
                {/*        profile*/}
                {/*        <Routes>*/}
                {/*            <Route path={'/settings'} element={<div>settings</div>}/>*/}
                {/*        </Routes>*/}
                {/*    </div>*/}

                {/*)}/>*/}

                {/*2 - Method*/}
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        <Outlet/>
                    </div>  )}>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
              </Route>

            </Routes>
        </div>
    );
}

export default App;
