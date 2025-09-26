import { Link } from "react-router-dom";
import { Button } from "../shared/Button";

export const Navbar = () => {
  const links = [
    { title: "Explore", path: "/" },
    { title: "Stats", path: "/" },
    { title: "Drops", path: "/" },
    { title: "Activity", path: "/" },
  ];
  return (
    <nav className="font-inter px-6 py-4 flex gap-4 justify-between shadow-lg">
      <div className="flex items-center gap-6 w-full">
        <Link to="/" className="text-primary font-black">
          <img src="/icons/logo.svg" alt="LightDAO" width="125px" />
        </Link>
        <input
          type="search"
          name="serch"
          placeholder="Search items, collections, and accounts"
          className="hidden md:block rounded-full py-3 px-6 bg-gray-200 w-full max-w-[500px] placeholder:font-light placeholder:text-sm placeholder:text-gray-400"
        />
      </div>
      <div className="flex gap-4 items-center">
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
    </nav>
  );
};
