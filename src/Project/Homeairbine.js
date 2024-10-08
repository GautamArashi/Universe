import React from "react";

const ChallengePage = () => {
  return (
    <>
    <div id='home' className="flex h-[80%]  justify-center   bg-white mt-[15%]">
     

      <div className="grid grid-cols-2 max-w-4xl  h-[40%]">
        <div className=" ">
          <h2 className="text-2xl font-bold ">THE</h2>
          <h2 className="text-2xl font-bold ">Challenge</h2>
          <div class="h-px font-extrabold bg-black w-[30%] my-4"></div>

        </div>
        <p className="text-gray-800 font-sans text-lg text-justify " >
          Airbnb’s third-annual global conference, the Airbnb Open, welcomed
          20,000+ hosts from 100+ countries to LA for a week of social
          collaboration, learning, speaker panels and specialty classes, capped
          off by a star-studded awards show and music. For a modern brand like
          Airbnb, the mobile and digital experience was a prime focus to engage
          users before, during and after the event, with smartly crafted
          applications that facilitate the best experience possible.
        </p>
      </div>
    </div>
   
    </>

  );
};

export default ChallengePage;
