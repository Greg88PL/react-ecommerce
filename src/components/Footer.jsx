import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-bg-dark">
      <footer className="container py-1 mt-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/regulations" className="nav-link px-2 text-bg-dark">
              Regulations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy-policy" className="nav-link px-2 text-bg-dark">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p className="text-center">© 2022 Greg Store</p>
      </footer>
    </div>
  );
};

export default Footer;
