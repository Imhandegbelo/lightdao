import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/shared/Footer";

export const MarketPlace = () => {
  const [filters, setFilters] = useState<
    | "all"
    | "trending"
    | "collectibles"
    | "domain-names"
    | "music"
    | "photography"
    | string
  >("all");

  return (
    <div className="min-h-screen font-inter">
      <Navbar logoColor="primary" hasSearch hasShadow />
      <main className="px-6 md:px-16 lg:px-20 py-12">
        <h2 className="text-left">Explore NFTs</h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            {[
              "all",
              "trending",
              "collectibles",
              "domain-names",
              "music",
              "photography",
            ].map((filter) => (
              <FilterButton
                filter={filters}
                label={filter}
                onClick={() => setFilters(filter)}
              />
            ))}
          </div>

          <div className="mt-12">
            
          </div>

          <div className="flex gap-2">
            <FilterButton label="Apply filter" onClick={() => ""} />
            <FilterButton label="Sort by" onClick={() => ""} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

interface ButtonProps {
  label: string;
  filter?: string;
  onClick: () => void;
}
const FilterButton: React.FC<ButtonProps> = ({ label, onClick, filter }) => {
  return (
    <button
      onClick={onClick}
      className={`border capitalize rounded-full ${
        filter === label
          ? "bg-primary/30 text-primary border-primary/30 hover:bg-primary hover:text-white"
          : "border-gray-300 "
      } text-xs font-bold py-4 px-8 hover:bg-gray-200`}
    >
      {label === "domain-names" ? "Domain Names" : label}
    </button>
  );
};
