import { data } from "autoprefixer";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data,referance}) {
  return (
    <motion.div 
    drag dragConstraints={referance} 
    whileDrag={{scale:1.2}} 
    dragElastic={0.1}
    dragTransition={{ bounceStiffness:100 ,bounceDamping:30 }}

    className=" relative flex-shrink p-5 w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between py-3 px-8  mb-5">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
          {
            data.close ? <IoMdClose size="0.7em" color="#fff"/> : <MdOutlineFileDownload size="0.7em" color="#fff"/> 
            
          }
         </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
              <a href="#"> 
                <h3 className="text-sm  font-semibold">{data.tag.tagTitle}</h3>
              </a>
          </div> 
          )
          } 
       
      </div>
    </motion.div>
    
       
  );
}
export default Card;
