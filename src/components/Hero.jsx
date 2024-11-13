import React from "react";
import { LuImport } from "react-icons/lu";
import profile from "../assets/profile.jpg"; // Update to match your image name

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
          Aryan <br /> Dagar
        </h1>
        <div className="mt-8">
          <a
            href="/resume-aryan-dagar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Aryan-Dagar-Resume.pdf"
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
            aria-label="Download Aryan Dagar's resume"
          >
            <span>Resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>
        <div className="w-full mt-8">
          <img
            src={profile}
            alt="Portrait of Aryan Dagar"
            className="h-auto w-full  object-cover" // Adjust the object position
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
