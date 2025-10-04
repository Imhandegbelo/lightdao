import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/shared/Footer";
import { marketData } from "../data/marketData";
import { BrowseNFTCard } from "../components/home/BrowseNFTCard";

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
        <div className="hidden md:flex justify-between mt-4">
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

          <div className="hidden xl:flex gap-2">
            <FilterButton label="Apply filter" onClick={() => ""} />
            <FilterButton label="Sort by" onClick={() => ""} />
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketData.map((data, idx) => (
            <BrowseNFTCard key={`exp` + idx} {...data} isExplore />
          ))}
        </div>

        <button className="mt-12 block pill cursor-pointer mx-auto bg-primary/40 font-semibold text-primary hover:bg-primary hover:text-white w-40 px-8">
          Load More
        </button>
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
      } text-xs font-bold py-2 lg:py-4 px-4 lg:px-8 hover:bg-gray-200`}
    >
      {label === "domain-names" ? "Domain Names" : label}
    </button>
  );
};
