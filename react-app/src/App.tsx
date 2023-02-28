import React from 'react'
import './App.css'
import { AppBar, Tabs, Tab } from '@mui/material';
import { Route, Link, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/DashBoard';
import NoMatch from './pages/NoMatch';

export default function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = () => {
        setValue(3);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <Tab label="Home" />
                    <Tab label="About" />
                    <Tab label="dashboard" />
                </Tabs>
            </AppBar>

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