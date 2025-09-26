// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/auth" element={<Auth />} />
    </Routes>
    </>
  );
}

export default App;
