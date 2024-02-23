import React from "react";

function Cartbuttons({ itemName, itemCount, setIngrediants }) {
  const maxLimit = {
    cheez: 5,
    salad: 3,
  };

  const minLimit = {
    cheez: 0,
    salad: 1
  }

  const decCounter = () => {l
    setIngrediants((prevIngrediants) => {
        // console.log(prevIngrediants[itemName] , minLimit[itemName]);
        if (prevIngrediants[itemName] > minLimit[itemName]) {
          return {
            ...prevIngrediants,
            [itemName]: prevIngrediants[itemName] - 1,
          };
        }else{
          return {
              ...prevIngrediants,
              [itemName]: minLimit[itemName]
          }
        }
      });
  };

  const incCounter = () => {
    setIngrediants((prevIngrediants) => {
      if (prevIngrediants[itemName] + 1 <= maxLimit[itemName]) {
        return {
          ...prevIngrediants,
          [itemName]: prevIngrediants[itemName] + 1,
        };
      }else{
        return {
            ...prevIngrediants,
            [itemName]: maxLimit[itemName]
        }
      }
    });
  };

  return (
    <div>
      <div className="mt-5">
        <span>{itemName} :</span>
        <button
          onClick={decCounter}
          className={`m-2 border-2 border-gray-500 py-1 px-4 transition-all duration-200 hover:bg-red-500 hover:border-red-500 hover:text-white ${itemCount === minLimit[itemName] ? "cursor-not-allowed" : " "}`}
        >
          Remove
        </button>
        <span>{itemCount}</span>
        <button
          onClick={incCounter}
          className={`m-2 border-2 border-gray-500 py-1 px-4 transition-all duration-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white ${itemCount === maxLimit[itemName] ? "cursor-not-allowed" : " "}`}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Cartbuttons;
