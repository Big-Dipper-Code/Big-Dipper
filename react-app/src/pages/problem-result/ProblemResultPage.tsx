import {useSelector, useDispatch} from "react-redux";
function ProblemResultPage(){
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Problem Result Page</h1>
            <h2>Count: {count}</h2>
        </div>
    )
}
export default ProblemResultPage