import React from 'react'

function Bread({itemName}) {
  return (
    <div className={`w-[250px] h-[70px] rounded-lg mt-[1px] text-white flex justify-center items-center ${itemName === "Bread" ? "bg-[#eec07b]" : "bg-amber-900"}`}>{itemName}</div>
  )
}

export default Bread