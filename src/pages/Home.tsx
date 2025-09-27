import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/shared/Footer";
import { selectedDrops } from "../data/selectedDrops";

export const Home = () => {
  return (
    <div className="min-h-screen font-inter bg-[url(/images/lightdao-bg.webp)] bg-center-top bg-contain bg-no-repeat">
      <Navbar logoColor="white" />
      {/* Hero */}
      <section className="flex items-center justify-center px-6 md:px-12 h-[400px] max-h-[700px] md:bg-[url(/images/home/bg-circles.webp)] bg-center bg-no-repeat bg-contain">
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
      <section className="px-6 md:px-12 lg:px-20 space-y-12">
        <h2>Selected notable drops</h2>
        <div className="grid grid-cols-2 grid-cols-4 gap-6">
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
                      className={`rounded-full border border-white ${
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
      <Footer />
    </div>
  );
};
