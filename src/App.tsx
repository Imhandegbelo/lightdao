// import { useState } from "react";
import { Footer } from "./components/Footer";
import { TopNav } from "./components/TopNav";
import { Footer as LayoutFooter } from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { DashboardLayout } from "./layout/DashboardLayout";

function App() {
  return (
    <>
      <DashboardLayout/>
      {/* <Navbar />

      <Footer />
      <LayoutFooter /> */}
    </>
  );
}

export default App;
