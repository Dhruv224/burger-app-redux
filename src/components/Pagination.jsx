import React from "react";

function Pagination({ currPage, handleClickPagination, totalPage }) {
    if(totalPage === 1){
        return;
    }
    
  return totalPage!==0 && <div className="flex items-center justify-center space-x-4 absolute bottom-[8vw] left-0 right-0">
  <button className={`text-3xl ${currPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClickPagination(currPage-1)}>⏮️</button>
  <span className="flex justify-center items-center gap-3">
      {
          [...Array(totalPage)].map((_, index) => {
              return <button key={index} className={`${currPage === index+1 ? "bg-blue-800" : "bg-blue-500"} hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} onClick={() => handleClickPagination(index+1)}>{index+1}</button>
          })
      }
  </span>
  <button className={`text-3xl ${currPage === totalPage ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClickPagination(currPage+1)}>⏭️</button>
</div>;
}

export default Pagination;
