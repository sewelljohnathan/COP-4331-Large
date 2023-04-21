import React, {useState} from 'react';
import './App.css';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import BoardPage from "./pages/Boards/boardPage";
import {Start} from './pages/Start';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Start />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="board" element={<BoardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
