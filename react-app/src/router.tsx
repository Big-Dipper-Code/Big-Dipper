import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import Home from "./pages/Home";
import ProblemResult from "@/pages/problem-result/ProblemResultPage";

const routes: RouteObject[] = [{
    path: "/",
    element: <Home />,
    children: [
        {
            path: "/problem-result",
            element: <ProblemResult />
        },
    ]
}]

const router = createBrowserRouter(routes);

export default router;