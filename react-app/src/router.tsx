import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import ProblemResult from "@/pages/problem-result/ProblemResultPage";
import HomePage from "@/pages/HomePage";

const routes: RouteObject[] = [{
    path: "/",
    element: <HomePage />,
    children: [
        {
            path: "/problem-result",
            element: <ProblemResult />
        },
    ]
}]

const router = createBrowserRouter(routes);

export default router;