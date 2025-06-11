import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../../data.json";

function CardContainer({theme}) {
  const [btns, setBtns] = useState("all");
  const [mapdata,setMappedata] = useState(data)

  useEffect(()=>{
    if(btns=="active"){
      setMappedata(data.filter((item)=>item.isActive))
    }
    else if(btns=="inactive"){
      setMappedata(data.filter((item)=>!item.isActive))
    }
    else{
      setMappedata(data)
    }
  },[btns])
  return (
    <div className="py-8">
      <div className="md:flex justify-between items-center   rounded-2xl p-4 mb-4">
        <div>
          <h1 className="text-center ">Extensions List</h1>
        </div>
        <div className="flex md:gap-2 gap-6 justify-center">
          <button
  onClick={() => setBtns("all")}
  className={`cursor-pointer hover:text-gray-400 rounded-4xl px-3 py-1 
    ${btns === "all" 
      ? "bg-red-500 text-white" 
      : theme === "dark" 
        ? "bg-gray-700 text-white" 
        : "bg-neutral-100 text-gray-800"
    }
  `}
>
  All
        </button>
          <button
  onClick={() => setBtns("active")}
  className={`cursor-pointer hover:text-gray-400 rounded-4xl px-3 py-1 
    ${btns === "active" 
      ? "bg-red-500 text-white" 
      : theme === "dark" 
        ? "bg-gray-700 text-white" 
        : "bg-neutral-100 text-gray-800"
    }
  `}
>
  Active
        </button>
          <button
  onClick={() => setBtns("inactive")}
  className={`cursor-pointer hover:text-gray-400 rounded-4xl px-3 py-1 
    ${btns === "inactive" 
      ? "bg-red-500 text-white" 
      : theme === "dark" 
        ? "bg-gray-700 text-white" 
        : "bg-neutral-100 text-gray-800"
    }
  `}
>
Inactive
        </button>

        </div>
      </div>

      {/* =======card div============== */}
      <div className="grid md:grid-cols-3 gap-4">
        {mapdata.map((item) => {
          return <Card item={item} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default CardContainer;
