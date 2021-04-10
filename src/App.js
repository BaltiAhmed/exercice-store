import React, { useCallback, useState } from "react";
import "./App.css";
import Login from "./pages/login ";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import List from "./pages/list";
import Ajout from "./pages/ajout";


function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);

  const loginApp = useCallback(() => {
    setIsloggedIn(true);
  });

  const logoutApp = useCallback(() => {
    setIsloggedIn(false);
  });
  let routes;
  if (isloggedIn) {
    routes = <Route path="/" exact component={Home} />;
  } else {
    routes = <Route path="/" exact component={Ajout} />;
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isloggedIn, login: loginApp, logout: logoutApp }}
    >
      <BrowserRouter>{routes}</BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
