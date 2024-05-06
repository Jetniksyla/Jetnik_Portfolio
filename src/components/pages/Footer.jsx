import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center p-4 bg-gray-800 text-white">
      © {new Date().getFullYear()} Jetnik Syla. All Rights Reserved.
    </footer>
  );
};

export default Footer;
