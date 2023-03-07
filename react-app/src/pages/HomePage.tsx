import React from 'react';
import { Outlet } from 'react-router-dom';
import MainTitle from "@/components/base/MainTitle";
import MainContent from "@/components/base/MainContent";
import ProblemCollection from "@/components/base/ProblemCollection";
import ProblemCollectionContent from "@/components/base/ProblemCollectionContent";

function HomePage() {
    return (
        <div>
            <MainTitle />
            <MainContent/>
            <ProblemCollection/>
            <ProblemCollectionContent/>
            <Outlet/>
        </div>
    );
}
export default HomePage;