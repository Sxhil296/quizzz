import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sm:fixed bottom-0 bg-black dark:bg-transparent text-white w-full py-4">
      <div className="flex justify-between items-center px-2 sm:px-4">
        <div>&copy; 2024; All Rights Reserved</div>
        <div>
          Built by <Link to="#" className="underline">Sahil</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
