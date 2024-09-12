import React from "react";

import Background from "../components/background.jsx";
import Foreground from "../components/foreground.jsx";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Card from "../components/card.jsx";

export default function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
 
      <Background />
     <div className="bg-sky-200"></div>
     <div className="fixed z-[3] top-0 left-0 w-full h-full p-5 flex gap-10 flexwrap-wrap">
      </div>
      
      <Foreground />
    </div>
  );
}
