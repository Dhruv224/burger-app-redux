import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bread from "./Bread";
import Cartbuttons from "./Cartbuttons";
import Cheez from "./Cheez";
import Salad from "./Salad";
import { updateItem } from "../redux/actions/OrdersActions";
import { useDispatch } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateOrder() {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const userNameRef = useRef("");
  const navigate = useNavigate();

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  let filteredOrders = orders.filter(
    (order) => order.orderId === parseInt(orderId)
  );

  const [ingrediants, setIngrediants] = useState({
    orderId: Number(orderId),
    user: filteredOrders[0]?.user,
    bread: filteredOrders[0]?.bread,
    cheez: filteredOrders[0]?.cheez,
    tikki: filteredOrders[0]?.tikki,
    salad: filteredOrders[0]?.salad,
  });

  const updateOrder = () => {
    if (
      userNameRef.current.value.trim() === "" ||
      userNameRef.current.value.trim() === null
    ) {
      userNameRef.current.focus();
      userNameRef.current.style.border = "2px solid blue";
      userNameRef.current.style.outline = "none";
    } else {
      dispatch(updateItem(orderId, ingrediants));
      toast.success(`Order updated sucessfully`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });

      setTimeout(() => {
        navigate("/orders");
      }, 1500);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center py-4 dark:bg-gray-800 dark:text-white">
      <ToastContainer />
      <div className="min-h-[450px] mt-16 flex flex-col justify-center items-center">
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
          className="border-2 border-black py-1 px-4 dark:bg-gray-800 dark:border-gray-600"
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
          onClick={updateOrder}
          className="m-2 border-2 border-gray-500 py-1 px-4 transition-all duration-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white"
        >
          Update Order
        </button>
      </div>
    </div>
  );
}

export default UpdateOrder;
