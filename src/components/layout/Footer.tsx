import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-6 bg-gray-100 font-semibold">
      <div className="flex gap-4">
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Licence</Link>
        <Link to="/">API</Link>
        <span className="text-gray-500">
          © 2024 LightDao All rights reserved
        </span>
      </div>
      <div className="flex gap-4">
        <Link to="/">Currency-USD</Link>
        <Link to="/">English</Link>
      </div>
    </footer>
  );
};
