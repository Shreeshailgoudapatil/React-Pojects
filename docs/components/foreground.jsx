import React, { useRef } from "react";
import Card from "../components/card.jsx";


const data = [
    {
        description:"Hii i am shreeshail completed my BE in Elecronics and communication From kls GIT",
        fileSize:"0.9mb",
        close:false, 
        tag:{isOpen:false, tagTitle:"Download Now" ,tagColor:"green"},
    },
    {
      description:"Hii i am shreeshail completed my BE in Elecronics and communication From kls GIT",
      fileSize:"0.9mb",
      close:false, 
      tag:{isOpen:true, tagTitle:"Download Now" ,tagColor:"blue"},
  },
  {
    description:"Hii i am shreeshail completed my BE in Elecronics and communication From kls GIT",
    fileSize:"0.9mb",
    close:false, 
    tag:{isOpen:true, tagTitle:"Download Now" ,tagColor:"green"},
},
  
    
]

export default function Foreground() {
     const ref = useRef(null);

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full p-5 flex gap-10 flexwrap-wrap">
    {
      data.map((item,index) => (
        <Card data={item} referance={ref}/>)
      )
    }
 
    </div>
  );
}  
