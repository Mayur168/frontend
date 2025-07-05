import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-3 pb-1 mt-auto ">
      <div className="container">
        {/* Flex row for contact details */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <div>
            <IoMdContact style={{ fontSize: "22px", marginRight: "8px" }} />
            +91-7447849409
          </div>
          <div>
            <IoLocationSharp style={{ fontSize: "22px", marginRight: "8px" }} />
            Nashik, Maharashtra, India
          </div>
          <div>
            <MdEmail style={{ fontSize: "22px", marginRight: "8px" }} />
            mayurgaikwad1442@gmail.com
          </div>
        </div>

        <hr className="my-2" />

        {/* Footer note */}
        <div className="text-center" style={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} Mayur Bhikan Gaikwad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
