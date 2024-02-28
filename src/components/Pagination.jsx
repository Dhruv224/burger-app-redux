import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

function Pagination({ currPage, handleClickPagination, totalPage }) {
    if(totalPage === 1){
        return;
    }
    
  return totalPage!==0 && <div className="flex items-center justify-center space-x-4 absolute bottom-[8vw] left-0 right-0">
  {/* <button className={`text-3xl ${currPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClickPagination(currPage-1)}>⏮️</button> */}
  <GrPrevious className={`text-3xl bg-white border-[1px] rounded-md border-gray-900 text-gray-900 p-2 font-bold transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-white   ${currPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClickPagination(currPage-1)} />
  <span className="flex justify-center items-center gap-3">
      {
          [...Array(totalPage)].map((_, index) => {
              return <button key={index} className={`${currPage === index+1 ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : "border-gray-900 border-[1px] text-black dark:border-white dark:text-white"} border-[1px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} onClick={() => handleClickPagination(index+1)}>{index+1}</button>
          })
      }
  </span>
  <GrNext className={`text-3xl bg-white border-[1px] rounded-md border-gray-900 text-gray-900 p-2 font-bold transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-white ${currPage === totalPage ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClickPagination(currPage+1)} />
</div>;
}

export default Pagination;
