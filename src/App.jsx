import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <BrowserRouter basename="/delivery-app/">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;