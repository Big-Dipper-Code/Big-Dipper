import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/DashBoard';
import NoMatch from './pages/NoMatch';

export default function App() {
    return (
        <div>
            <h1>Big-Dipper</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <Outlet />
        </div>
    );
}