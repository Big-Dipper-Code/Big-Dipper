import React from 'react'
import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProblemId from '@/pages/problem/[ProblemId]';
import ProblemPage from "@/pages/problem/ProblemPage";


export default function App() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/problem" element={<ProblemPage />} >
                    <Route path="/problem/:problemId" element={<ProblemId />} />
                </Route>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}