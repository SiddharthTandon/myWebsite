"use client"
import Image from "next/image";
import "./page.css";
import { useState } from "react";




export default function Home() {

  const [dark, setDark] = useState(true);

  const handleClick =()=>{
    setDark(prevDark => !prevDark)
  }


  return (
    <div className={`${dark ? "bg-black" : "bg-white"} min-h-screen`}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center h-full gap-12 mx-10 mt-5 w-full">
          <div className="text-white hover-effect">
            About Me
          </div>
          <div className="text-white hover-effect">
            Coding Profiles
          </div>
          <div className="text-white hover-effect">
            Dev
          </div>
          <div className="text-white hover-effect">
            Core Subjects
          </div>
        </div>
        <div className="flex items-center ">
          <button
            className="rounded-lg border-b-4 border-white bg-inherit mt-1 mb-1 px-6 py-2 text-white hover-button whitespace-nowrap"
            onClick={handleClick}
          >
            {dark ? "Go Light" : "Go Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
