import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import LuxuriousAnimatedHelloWorld from "./components/LuxuriousAnimatedHelloWorld";
import Cart from "./page/Cart/Cart";
function App() {
  return (
    <>
      {/* <LuxuriousAnimatedHelloWorld /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
