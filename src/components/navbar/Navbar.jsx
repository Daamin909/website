import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-7 text-white">
      <div>
        <p className="font-[Bebas_Neue] text-4xl">daamin.ashai</p>
      </div>
      <div className="flex justify-between gap-15 items-center">
        <a href="#" className="font-[Lato] text-xl">
          home
        </a>
        <a href="#projects" className="font-[Lato] text-xl">
          projects
        </a>
        <a href="#gallery" className="font-[Lato] text-xl">
          gallery
        </a>

        {
          // TODO make a blog.
          /* <a href="#blog" className="font-[Lato] text-xl">
          blog
        </a> */
        }
        <a href="#contact" className="font-[Lato] text-xl ">
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
