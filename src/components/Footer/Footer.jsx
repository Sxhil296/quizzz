import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black dark:bg-transparent text-white w-full px-2 py-4">
      <div className="flex justify-between items-center px-2 sm:px-4">
      <Link to="/" className="text-2xl font-bold text-white">
            QUIZZZ.
          </Link>
        <div>
        <small className="text-white">
            &copy;
            {`${new Date().getFullYear()} `}
            <a
              href="#"
              target="_blank"
              className="underline hover:font-medium"
            >
             Sahil
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
