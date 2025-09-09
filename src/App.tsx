// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
    </Routes>
    </>
  );
}

export default App;
