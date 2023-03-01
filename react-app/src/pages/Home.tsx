import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { decrement, increment } from "@/utils/slices/counterSlice";
import Button from "@mui/material/Button";
import AbcIcon from '@mui/icons-material/Abc';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>

      <Button variant="contained" onClick={() => dispatch(increment())}>Increase</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        <AbcIcon/>
        Decrease
      </Button>
        <Outlet/>
    </div>
  );
};

export default Home;