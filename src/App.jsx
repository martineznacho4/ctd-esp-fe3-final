import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Notification from "./Components/Notification";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar toggleTheme={toggleTheme} />
          <Notification />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
