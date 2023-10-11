import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import OldWork from "./pages/oldWork";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center mt-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/oldWork" element={<OldWork />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
