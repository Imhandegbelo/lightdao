import React from "react";
import { Navbar } from "../components/layout/Navbar";
// import { Footer } from '../components/layout/Footer'
import { SideNav } from "../components/layout/SideNav";
import { Footer as LayoutFooter } from "../components/layout/Footer";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-betwe/en">
      <Navbar />
      <main className="h-[calc(100vh-9.5rem)] flex justify-between">
        <SideNav />

        {children}
      </main>
      {/* <AppFooter /> */}
      <LayoutFooter />
    </div>
  );
};
