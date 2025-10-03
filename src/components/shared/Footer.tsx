import { Link } from "react-router-dom";
import { Button } from "./Button";

const marketLinks = [
  {
    title: "Explore",
    path: "#",
  },
  {
    title: "Help Center",
    path: "#",
  },
  {
    title: "Become a Partner",
    path: "#",
  },
  {
    title: "About Us",
    path: "#",
  },
  {
    title: "Platform Status",
    path: "#",
  },
];

const applyLinks = [
  {
    title: "Profile",
    path: "#",
  },
  {
    title: "Favourites",
    path: "#",
  },
  {
    title: "Watchlist",
    path: "#",
  },
  {
    title: "My Collections",
    path: "#",
  },
  {
    title: "Rankings",
    path: "#",
  },
  {
    title: "Activities",
    path: "#",
  },
];

export const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-500">
      <div className="px-6 md:px-9 py-12 lg:px-20 mx-auto border-b max-w-[1440px] h-8/0 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full space-y-6">
          <h3 className="font-bold text-black">Subscribe to updates</h3>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              event.preventDefault()
            }
            className="py-2 flex border border-gray-400 rounded-full w-full max-w-[19rem] pl-4 pr-2"
          >
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="py-1 border-transparent placeholder:text-gray-500 w-full"
            />
            <button
              type="submit"
              className="rounded-full flex items-center justify-center py-2 px-4 bg-primary hover:scale-95 text-white font-bold"
            >
              {">"}
            </button>
          </form>
        </div>
        <div className="w-full flex gap-8 justify-between">
          <div className="space-y-2">
            <h3 className="font-bold text-black">Marketplace</h3>
            <ul className="space-y-2">
              {marketLinks.map((link, idx) => (
                <li key={`mark-${idx}`}>
                  <Link
                    to={link.path || "#"}
                    className="font-bold text-sm text-gray-500 hover:text-gray-700"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-black">Apply</h3>
            <ul className="space-y-2">
              {applyLinks.map((link, idx) => (
                <li key={`mark-${idx}`}>
                  <Link
                    to={link.path || "#"}
                    className="font-bold text-sm text-gray-500 hover:text-gray-700"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:max-w-[19rem] space-y-6">
          <h3 className="font-bold text-black">Region</h3>
          <p className="text-sm">
            The world's first marketplace for collectibles and non-fungible
            tokens NFTs where anything is possible and all are welcome
          </p>

          <Button
            label="Currency - USD"
            onClick={() => {}}
            transparent
            className="border-gray text-black font-bold"
          />
        </div>
      </div>
    </div>
  );
};
