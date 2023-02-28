import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { decrement, increment } from "@/utils/slices/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>

      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
        <Outlet/>
    </div>
  );
};

export default Home;