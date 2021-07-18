import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, createContext } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Pages/Footer/Footer";
import ScrollButton from "./Components/ScrollButton/ScrollButton";

export const UserContext = createContext([]);

function App() {
  const [click, setClick] = useState([]);
  return (
    <>
      <UserContext.Provider value={[click, setClick]}>
        <Router>
          <Header />
          <ScrollButton />
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}
export default App;
