import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


type NavLink = {
  label: string;
  subLinks: { label: string; path: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "Manage Listings",
    subLinks: [
      {
        label: "Your Listings",
        path: "/mylistings",
      },
      {
        label: "Favourites",
        path: "/favourites",
      },
      {
        label: "Following",
        path: "/following",
      },
      {
        label: "Payouts",
        path: "/payouts",
      },
    ],
  },
  {
    label: "Profile Settings",
    subLinks: [
      {
        label: "Account Details",
        path: "/account",
      },
      {
        label: "Security",
        path: "/security",
      },
      {
        label: "Apps",
        path: "/apps",
      },
      {
        label: "Notifications",
        path: "/notifications",
      },
      {
        label: "Help Center",
        path: "/help",
      },
    ],
  },
];

export const SideNav: React.FC = () => {
  // Track open/closed state of each dropdown by label
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className="font-inter w-64 h-ful/l bg-white border-r py-8 px-4">
      <nav className="space-y-4">
        {navLinks.map((item) => (
          <div key={item.label}>
            {/* {item.subLinks ? (
              <> */}
                <button
                  className="flex items-center justify-between w-full text-left text-sm text-gray-500 font-light px-3 py-2 rounded hover:bg-gray-100 transition"
                  onClick={() => toggleMenu(item.label)}
                >
                 {item.label}
                </button>
                {openMenus[item.label] && (
                  <div className="ml-4 mt-1 space-y-3">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-3 py-2 font-bold text-sm text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              {/* </>
            ) : null} */}
          </div>
        ))}
      </nav>
    </aside>
  );
};
