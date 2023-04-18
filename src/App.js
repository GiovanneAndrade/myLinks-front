import React,{ useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home } from "./pages/home/Home";
import { Signin } from "./pages/signin/Signin";
import { RequireAuth } from "./providers/Private";
import PersistentDrawerLeft from "./components/drawer/Drawer";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
           
          <Route path="/"  element={<Signin />} />
          <Route path="/home" element={<RequireAuth><PersistentDrawerLeft /></RequireAuth>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
