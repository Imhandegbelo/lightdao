import { useState } from "react";
import { CollectionCard } from "../components/home/CollectionCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/shared/Footer";
import { collections } from "../data/collectionData";
import { gettingStarted } from "../data/resourceData";
import { selectedDrops } from "../data/selectedDrops";
import { browseData } from "../data/browseData";
import { BrowseNFTCard } from "../components/home/BrowseNFTCard";

export const Home = () => {
  const [filters, setFilters] = useState<
    | "all"
    | "trending"
    | "collectibles"
    | "domain-names"
    | "music"
    | "photography"
  >("all");

  return (
    <div className="min-h-screen font-inter bg-[url(/images/lightdao-bg.webp)] bg-center-top bg-contain bg-no-repeat">
      <Navbar logoColor="white" />
      {/* Hero */}
      <section className="flex items-center justify-center px-6 md:px-12 h-[400px] max-h-[700px] md:bg-[url(/images/home/bg-circles.webp)] bg-center bg-no-repeat bg-contain xl:bg-cover ">
        <div className="max-w-[720px] mx-auto text-center">
          <h1 className="font-black text-4xl md:text-5xl lg:text-[54px]">
            Discover, collect, and sell Faith Driven NFTs
          </h1>
          <p className="max-w-[466px] mx-auto">
            Our marketplace is the world's first Christian NFT market for
            Christian creators worldwide{" "}
          </p>
          <input
            type="search"
            name="serch"
            placeholder="Search items, collections, and accounts"
            className="shadow mx-auto rounded-full py-3 px-6 mt-6 bg-white w-full max-w-[500px] placeholder:font-light placeholder:text-sm placeholder:text-gray-400"
          />
        </div>
      </section>

      {/* Selected Drop */}
      <section className="px-6 md:px-12 lg:px-20 space-y-12 pb-12 max-w-[1440px] mx-auto">
        <h2>Selected notable drops</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedDrops.map((drop, idx) => (
            <div
              key={"drop" + idx}
              className="border border-gray-300 rounded-2xl p-6 space-y-6"
            >
              <div className="flex justify-between items-center">
                <span
                  className={`pill ${
                    drop.isLive && "bg-primary/20 text-primary"
                  }`}
                >
                  {drop.isLive ? "Live Now" : drop.date}
                </span>
                <span>{drop.count}</span>
              </div>
              <img
                src={drop.img}
                alt={drop.name}
                className="w-full object-center rounded-2xl"
              />
              <div className="space-y-4">
                <h3 className="font-extrabold text-lg">{drop.name}</h3>
                <div className="flex gap-2 items-center">
                  <img src="/icons/solana.svg" alt="sol" />
                  <p className="text-sm">
                    from <span className="font-bold">{drop.price} sol</span>
                  </p>
                </div>
                <div className="flex">
                  {drop.authors.map((author, idx) => (
                    <img
                      key={"author" + idx}
                      src={author}
                      alt={"author" + idx}
                      className={`rounded-full border border-white size-[35px] ${
                        idx > 0 && "-ml-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Collections */}
      <section className="px-6 md:px-12 lg:px-20 py-12 space-y-12 max-w-[1440px] mx-auto">
        <h2>
          Top sellings collections{" "}
          <span className="text-primary">last 7 days</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-2/3">
            <div className="flex flex-col gap-4 w-full">
              {collections.slice(0, 3).map((collection, idx) => (
                <CollectionCard
                  key={`col1` + idx}
                  img={collection.img}
                  name={collection.name}
                  change={collection.change}
                  volume={collection.volume}
                  count={idx + 1}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full">
              {collections.slice(3, 6).map((collection, idx) => (
                <CollectionCard
                  key={`col2` + idx}
                  img={collection.img}
                  name={collection.name}
                  change={collection.change}
                  volume={collection.volume}
                  count={idx + 3}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {collections.slice(-3).map((collection, idx) => (
              <CollectionCard
                key={`col3` + idx}
                img={collection.img}
                name={collection.name}
                change={collection.change}
                volume={collection.volume}
                count={idx + 6}
              />
            ))}
          </div>
        </div>

        <button className="block pill cursor-pointer mx-auto bg-primary/40 font-semibold text-primary hover:bg-primary hover:text-white w-40 px-8">
          Load More
        </button>
      </section>

      {/* Resources for getting started */}
      <section className="px-6 md:px-12 lg:px-20 py-12 space-y-12 bg-gray-100 max-w-[1440px] mx-auto">
        <h2>Resources for getting started</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {gettingStarted.map((card, idx) => (
            <div className="rounded-2xl bg-white p-4 space-y-4">
              <img
                src={card.img}
                alt={`resource` + idx}
                className="w-full rounded-xl h-[170px] object-center object-cover"
              />
              <h3 className="font-bold">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>

              <a href="#" className="text-sm font-bold">
                See more details
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Popular NFTs */}
      <section className="py-12 space-y-12 max-w-[1440px] mx-auto">
        <h2>Browse Popular NFTs</h2>
        <div className="flex justify-center gap-4 border-b border-gray-300">
          {[
            "all",
            "trending",
            "collectibles",
            "domain-names",
            "music",
            "photography",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setFilters(filters)}
              className={`whitespace-nowrap capitalize text-lg p-2 pb-4 border-b-2 ${
                filters === filter
                  ? "border-gray-800 text-gray-800"
                  : "border-transparent text-gray-500"
              } hover:border-gray-800 capitalize`}
            >
              {filter === "domain-names" ? "Domain Names" : filter}
            </button>
          ))}
        </div>
        <div className="px-6 md:px-12 lg:px-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {browseData.map((data, idx) => (
            <BrowseNFTCard key={`nft-` + idx} {...data} />
          ))}
        </div>
        <button className="block pill cursor-pointer mx-auto bg-primary/40 font-semibold text-primary hover:bg-primary hover:text-white w-40 px-8">
          Load More
        </button>
      </section>
      <Footer />
    </div>
  );
};
