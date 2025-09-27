import { Link, useNavigate } from "react-router-dom";
import { Button } from "../shared/Button";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState, useEffect } from "react";

interface NavbarProps {
  logoColor?: "white" | "primary";
  hasSearch?: boolean;
  hasShadow?: boolean;
}

const links = [
  { title: "Explore", path: "#" },
  { title: "Stats", path: "#" },
  { title: "Drops", path: "#" },
  { title: "Activity", path: "#" },
];

export const Navbar: React.FC<NavbarProps> = ({
  logoColor,
  hasSearch,
  hasShadow,
}) => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setPath(pathname);
  }, [navigate]);

  return (
    <nav
      className={`font-inter px-6 py-4 flex gap-4 justify-between ${
        hasShadow && "shadow-lg"
      }`}
    >
      <div className="flex items-center gap-6 w-full">
        <Link
          to="/"
          className={`logo text-2xl text-primary font-medium ${
            logoColor === "white" && "text-white"
          }`}
        >
          LightDAO
        </Link>
        {hasSearch && (
          <input
            type="search"
            name="serch"
            placeholder="Search items, collections, and accounts"
            className="hidden md:block rounded-full py-3 px-6 bg-gray-200 w-full max-w-[500px] placeholder:font-light placeholder:text-sm placeholder:text-gray-400"
          />
        )}
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <>
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="font-bold text-gray-600 hover:text-black"
            >
              {link.title}
            </Link>
          ))}
        </>
        <Button
          onClick={() => {}}
          label="Create"
          size="small"
          variant="primary"
          primary
        />
        <button className="rounded-full size-10">
          <img src="/images/img.png" alt="User" />
        </button>
      </div>
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="md:hidden inline-flex items-center justify-center w-12 h-12 border border-white rounded-md hover:bg-gray-200 focus:outline-none"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Dialog as="div" open={navOpen} onClose={setNavOpen}>
        <div className="fixed inset-0 z-50 bg-black/80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-[400px]">
          <div className="bg-white overflow-y-auto space-y-4 pl-12 pr-3 py-2 h-screen">
            <div className="flex justify-end mt-4 px-4">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="inline-flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* <div className="flex border h-[48px] w-full rounded">
              <input
                type="search"
                placeholder="Search"
                // value={searchText}
                // onChange={(e) => setSearchText(e.target.value)}
                // style={{ backgroundImage: `url(${SearchIcon})` }}
                className="text-base placeholder-gray-300 pl-11 py-3 bg-[center_left_1rem] bg-no-repeat w-full rounded-y rounded-l hover:outline-none hover:border-gray-400"
              />
              <button
                // onClick={() => handleSearch(searchText)}
                className="bg-primary text-white rounded-r px-6 py-3 hover:bg-primary/90"
              >
                Search
              </button>
            </div> */}

            <ul className="flex flex-col gap-6">
              {links.map((li) => (
                <li key={li.title} className="">
                  <Link
                    to={li.path}
                    className={`text-2xl border-b-2 ${
                      path === li.path
                        ? "border-secondary"
                        : "border-transparent"
                    } hover:font-medium hover:border-secondary`}
                    onClick={() => setNavOpen(false)}
                  >
                    {li.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
};
