import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-20">
      <div className="p-10">
        <p className="font-[Bebas_Neue] text-4xl">daamin.ashai</p>
      </div>
      <div className="flex justify-between w-[30%] p-10`">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#gallery">Gallery</a>
        <a href="https://blog.daamin.me">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
