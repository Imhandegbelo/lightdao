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
    <nav className="px-6 py-4 flex gap-4 justify-between">
      <div className="flex">
        <Link to="/" className="text-primary font-black">
          <img src="/icons/logo.svg" alt="LightDAO" />
        </Link>
        <input />
      </div>
      <div className="flex gap-4 items-center">
        <>
          {links.map((link) => (
            <Link key={link.title} to={link.path}>
              {link.title}
            </Link>
          ))}
        </>
          <Button onClick={()=>{}} label="Create" size="small" variant="primary" primary />
      </div>
    </nav>
  );
};
