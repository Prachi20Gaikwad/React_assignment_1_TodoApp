import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import UserRoute from "./components/UserRoute";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }

    });
  }, [dispatch])

  return (


    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter >


  );
};

export default App;
