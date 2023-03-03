import React from "react";
import ChevronUpIcon from "./ChevronUpIcon";



const BackToTop = ({ isVisible, onClick }) => {
    if(!isVisible) {
        return <div />
    }

  return (
      <div
        role='button'
        className="fixed w-9 h-9 lg:w-10 lg:h-10 p-1 bottom-5 right-4 text-white bg-slate-500 rounded-full z-40 shadow-sm flex items-center justify-center"
        onClick={onClick}
      >
        <ChevronUpIcon className="w-6 h-6 md:h-7 md:w-7" />
      </div>
  );
};

export default BackToTop;
 