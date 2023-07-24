import React from 'react';

import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

const Profile = () => {
    const params = useParams<'id'>()
    const some = params.id
    return <div>{`profile${some}`}</div>
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}> main </NavLink>
            <NavLink to={'/login'}> login </NavLink>
            <NavLink to={'/profile'}> profile </NavLink>
            <NavLink to={'/profile/1'}> profile1</NavLink>
            <NavLink to={'/profile/2'}> profile2</NavLink>
            {/*<NavLink to={'/profile/settings'}> settings </NavLink>*/}

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/:id'} element={<Profile/>}/>

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
              {/*  <Route path={'/profile'} element={(*/}
              {/*      <div>*/}
              {/*          profile*/}
              {/*          <Outlet/>*/}
              {/*      </div>  )}>*/}
              {/*      <Route path={'/profile/settings'} element={<div>settings</div>}/>*/}
              {/*</Route>*/}



            </Routes>
        </div>
    );
}

export default App;
