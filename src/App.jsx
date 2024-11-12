import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";

import "./App.css";
import Test from "./assets/pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
