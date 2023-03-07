import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import ProblemResult from "@/pages/problem-result/ProblemResultPage";
import HomePage from "@/pages/HomePage";
import ProblemPage from "@/pages/problem/ProblemPage";
import ProblemId from "@/pages/problem/[ProblemId]";

const routes: RouteObject[] = [{
    path: "/",
    element: <HomePage />,
    children: [
        {
            path: "/problem-result",
            element: <ProblemResult />
        },
        {
            path: "/problem",
            element: <ProblemPage />,
            children: [
                {
                    path: ":problemId",
                    element: <ProblemId />
                }
            ]
        }
    ]
}]

const router = createBrowserRouter(routes);

export default router;