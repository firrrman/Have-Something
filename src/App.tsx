import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verifikasi from "./pages/Verifikasi";
import Index from "./pages/Index";
import Flower from "./pages/Flower";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verifikasi />} />
        <Route path="/index" element={<Index />} />
        <Route path="/flower" element={<Flower />} />
      </Routes>
    </BrowserRouter>
  );
}
