import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home } from "./pages/home/Home";
import { Signin } from "./pages/signin/Signin";
import { RequireAuth, RequireLogin } from "./providers/Private";
import PersistentDrawerLeft from "./components/drawer/Drawer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("tokenMyLink");
    if (!token) {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireLogin isAuthenticated={isAuthenticated}>
                <Signin setIsAuthenticated={setIsAuthenticated} />
              </RequireLogin>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth isAuthenticated={isAuthenticated}>
                <PersistentDrawerLeft />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
