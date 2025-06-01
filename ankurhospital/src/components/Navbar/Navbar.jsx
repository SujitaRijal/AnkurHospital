import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 w-full bg-[#666666] shadow-lg">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto lg:px-8 sm:px-6 md:px-20">
          <Link to="/" className="text-white text-xl font-bold">
            Logo
          </Link>
          <nav className="flex space-x-6">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/About" },
              { label: "Department", path: "/Department" },
              { label: "Services", path: "/Services" },
              { label: "Contact", path: "/Contact" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="relative text-base font-semibold text-white md:text-lg lg:text-xl hover:scale-110 transition-transform duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
