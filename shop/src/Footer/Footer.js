import React from "react";

import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          <div className="py-6 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              aspernatur nihil aperiam commodi sit deserunt autem modi!
              Perferendis maiores nemo quidem, possimus mollitia ea dicta maxime
              praesentium quos odit? Atque, itaque.
            </p>
          </div>
          <div>
            <div className="py-8 px-4">
              <h1 className="sm-text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLink.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
                  <a href="/#" className="text-3xl">
                    <FaFacebook/>
                  </a>
                  <a href="/#" className="text-3xl">
                    <FaLinkedin/>
                  </a>
                  <a href="/#" className="text-3xl">
                    <FaInstagram/>
                  </a>
            </div>
          <div className="py-8 px-4">
            <h1 className="sm-text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Links
            </h1>
            <ul className="flex flex-col gap-3">
              {FooterLink.map((link) => (
                <li
                className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                key={link.title}
                >
                  {link.title}
                </li>
              ))}
            </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
