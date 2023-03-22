import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Content() {
      return (
        <div className='bg-gray-100 w-full m-2 p-2'>
          <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/watch" element={<div>dashboard</div>}></Route>
            <Route path="/aboutfilm" element={<div>Active users</div>}></Route>
            <Route path="/aboutactors" element={<div>Disabled users</div>}></Route>
            <Route path="/contact" element={<div>Contact</div>}></Route>
          </Routes>
        </div>
      );
    }
