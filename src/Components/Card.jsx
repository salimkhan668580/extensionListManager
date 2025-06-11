import React from "react";

function Card({ item, theme, mapdata, setMappedata }) {
  const clickHandler = () => {
    item.isActive = !item.isActive;
    setMappedata([
      ...mapdata.filter((item) => item.isActive),
      ...mapdata.filter((item) => !item.isActive),


    ]);


    
  }

  return (
    <div
      className={`${
        theme == "light" ? "bg-white" : "bg-neutral-800 text-white "
      } px-3 rounded-2xl py-2 `}
    >
      <div className="flex gap-1">
        <div>
          <img src={item.logo} />
        </div>
        <div>
          <h2 className="font-bold">{item.name}</h2>
          <p
            className={`text-[13px] ${
              theme == "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <div>
          <button
          className={`
    hover:bg-red-500 hover:text-white hover:border-0 
    rounded-3xl text-xs px-3 py-1 border cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 
    ${theme === "light" ? "focus:ring-offset-white" : "focus:ring-offset-gray-800"}
  `}
           >
            Remove
          </button>
        </div>
        <div>
          <label className="relative inline-block cursor-pointer w-12 h-6">
            <input
              type="checkbox"
              checked={item.isActive}
              className="sr-only peer"
              onClick={clickHandler}
            />
            <div
              className={`
    w-full h-full rounded-full transition-colors duration-300
    ${
      item.isActive
        ? "bg-red-600 dark:bg-red-500"
        : "bg-gray-300 dark:bg-gray-700"
    }
    peer-focus:ring-2 ${
      theme === "light"
        ? "peer-focus:ring-offset-white"
        : "peer-focus:ring-offset-gray-800"
    }
    peer-focus:ring-offset-2 ${
      theme === "light" ? "peer-focus:ring-red-600" : "peer-focus:ring-red-500"
    }
  `}
            ></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Card;
