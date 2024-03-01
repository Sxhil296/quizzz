import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black text-white w-full py-4">
      <div className="flex justify-between items-center  px-4">
        <div>&copy; 2024; All Rights Reserved</div>
        <div>
          Built by <Link to="#" className="underline">Sahil</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
