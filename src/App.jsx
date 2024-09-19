import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import PaintingPage from "./pages/painting/PaintingPage";
import GraphicsPage from "./pages/graphics/GraphicsPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="graphics" element={<GraphicsPage />} />
            <Route path="painting" element={<PaintingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
