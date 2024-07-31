import { useState } from "react";
import image from "../Project/Images/Bgcompany22.png";

const Header = () => {
  const ParagraphStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-red-500 h-screen bg-cover bg-center relative">
        <div className="absolute inset-0 flex items-center justify-center ml-[40%]">
          <img
            src={image}
            alt="bgimage"
            className="object-cover opacity-50"
          />
        </div>
        <nav className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold">
                <a href="/" className="flex items-center text-4xl">
                  <span className="text-white">utility</span>
                  <span className="text-white">.</span>
                </a>
              </div>
              <div className="hidden md:flex space-x-8 text-2xl">
                <a href="#" className="text-white hover:text-black">
                  Case Studies
                </a>
                <a href="#" className="text-white hover:text-black">
                  Team
                </a>
                <a href="#" className="text-white hover:text-black">
                  Approach
                </a>
                <a href="#" className="text-white hover:text-black">
                  Careers
                </a>
                <a href="#" className="text-black bg-white px-4 py-2 rounded-md">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative z-10 grid items-center justify-center mt-[13%] ml-[40%] gap-3 text-white">
          <h1 className="text-4xl font-bold w-60">Airbnb Open</h1>
          <p
            className="grid w-[37%] font-thin text-2xl"
            style={isOpen ? null : ParagraphStyles}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit
            tempore dicta veniam sit voluptates ipsa repellendus autem, quasi
            placeat! Id.
          </p>
          <button className="text-3xl w-56 ml-56" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? " " : "Read more..."}
          </button>
          <div className="text-2xl cursor-pointer w-40">
            <span className="mr-4">See More</span>
            <i class="fa-solid fa-arrow-down fa-bounce"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
