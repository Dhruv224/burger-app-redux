import React, { useRef, useState } from "react";
import Bread from "./Bread";
import Cheez from "./Cheez";
import Salad from "./Salad";
import Cartbuttons from "./Cartbuttons";
import { useNavigate } from "react-router-dom";

function Home() {
  const userNameRef = useRef("");
  const navigate = useNavigate();
  const [ingrediants, setIngrediants] = useState({
    orderId: null,
    user: "",
    bread: 2,
    cheez: 0,
    tikki: 1,
    salad: 1,
  });

  const orderNow = () => {
    if (
      userNameRef.current.value.trim() === "" ||
      userNameRef.current.value.trim() === null
    ) {
      userNameRef.current.focus();
      userNameRef.current.style.border = "2px solid blue";
      userNameRef.current.style.outline = "none";
    } else {
      let orderData = JSON.parse(localStorage.getItem("orders")) || [];
      ingrediants.orderId = orderData[orderData.length - 1]?.orderId + 1 || 1;
      orderData.push(ingrediants);
      localStorage.setItem("orders", JSON.stringify(orderData));
      setIngrediants({ ...ingrediants, user: "" });
      navigate("/orders");
    }
  };

  return (
    <div className="flex items-center flex-col justify-center m-8">
      <div className="min-h-[500px] flex flex-col justify-center items-center">
        <Bread itemName="Bread" height="80px" />
        {[...Array(ingrediants.cheez)].map((_, index) => (
          <Cheez key={index} />
        ))}
        <Bread itemName="Tikki" height="40px" />
        {[...Array(ingrediants.salad)].map((_, index) => (
          <Salad key={index} />
        ))}
        <Bread itemName="Bread" height="80px" />
      </div>

      <Cartbuttons
        itemName="cheez"
        itemCount={ingrediants.cheez}
        setIngrediants={setIngrediants}
      />
      <Cartbuttons
        itemName="salad"
        itemCount={ingrediants.salad}
        setIngrediants={setIngrediants}
      />

      <div>
        <input
          type="text"
          name="user"
          ref={userNameRef}
          placeholder="Enter Name..."
          className="border-2 border-black py-1 px-4"
          required
          value={ingrediants.user}
          onChange={(e) => {
            setIngrediants((prevIng) => {
              return {
                ...prevIng,
                user: e.target.value,
              };
            });
          }}
        />
        <button
          type="button"
          onClick={orderNow}
          className="m-2 border-2 border-gray-500 py-1 px-4 transition-all duration-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Home;
