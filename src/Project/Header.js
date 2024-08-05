import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../Project/Images/Bgcompany22.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    // Use an absolute path to navigate to the desired route
    navigate("/Homeairbine");
  };

  const ParagraphStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-red-500 min-h-screen  bg-cover bg-center relative">
      <motion.div
        initial={-60}
        animate={{ x: -50, y: -100 }}
        transition={{ ease: "easeOut", duration: 0.5 }} // Specify the duration in seconds
        className="absolute inset-0 flex items-center justify-center md:ml-[20%]"
      >
        <img
          src={image}
          alt="bgimage"
          className="object-cover ml-[25%] opacity-50 w-[70%]"
        />
      </motion.div>

      <div className="relative z-10 grid items-center justify-center   md:ml-[28%] gap-3 text-white">
        <motion.h1
          // initial={{ y: -100 }}
          // animate={{ y: -50 }}
          className="text-4xl font-bold text-white w-60 md:w-auto "
        >
          Airbne Open
        </motion.h1>

        <p
          className="grid w-full px-4 md:w-[37%] font-thin text-2xl"
          style={isOpen ? null : ParagraphStyles}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit
          tempore dicta veniam sit voluptates ipsa repellendus autem, quasi
          placeat! Id.
        </p>
        <button
          className="text-3xl w-full md:w-56 ml-0 md:ml-56"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? " " : "Read more..."}
        </button>
        <a href="#home">
          <div className="text-2xl cursor-pointer w-full md:w-40 text-center md:text-left">
            <button onClick={handleSeeMoreClick} className="mr-4"></button>
            See More
            <i className="fa-solid fa-arrow-down fa-bounce"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
