import React, { useState, useEffect, useRef, useMemo } from "react";
import Cheez from "./Cheez";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/OrdersActions";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [ordersObj, setOrdersObj] = useState([]);

  // const deleteItem = (orderId) => {
  //   let newOrders = ordersObj.filter(order => order.orderId !== orderId);
  //   localStorage.setItem("orders", JSON.stringify(newOrders));
  //   setOrdersObj(newOrders);
  // }

  // useEffect(() => {
  //     let data = JSON.parse(localStorage.getItem("orders")) || [];
  //     setOrdersObj(data);
  // }, []);

  const ordersObj = useSelector((state) => state.orders);

  const [name, setName] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [checked, setChecked] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const currValName = useRef("");
  const limit = 3;
  const totalPage = Math.ceil(ordersObj.length / limit);
  const startIndex = (currPage - 1) * limit;
  const endIndex = startIndex + limit;

  const handleClickPagination = (index) => {
    if (index >= 1 && index <= totalPage) {
      setCurrPage(index);
    }
  };

  const updateItem = (orderId) => {
    navigate(`${orderId}`);
  };

  const deleteItem = (orderId) => {
    if (ordersObj.slice(startIndex, endIndex).length === 1 && currPage !== 1) {
      setCurrPage(currPage - 1);
    }
    dispatch(removeFromCart(orderId));
    toast.error(`Order :-  ${orderId} removed`, {
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
  };

  let timer;
  const handleChange = (e) => {
    if (timer !== null) {
      // console.log("clearing timeout");
      clearTimeout(timer);
    }
    // console.log("setting new timer");
    timer = setTimeout(() => {
      // console.log("setting name here..........");
      setName(currValName.current.value);
    }, 500);
  };

  const slicedOrders = useMemo(() => {
    // it will slice data only once
    return ordersObj.slice(startIndex, endIndex);
  }, [currPage, ordersObj]);

  const handleSearch = (ordersObj) => {
    if (checked) {
      if (dropDown === "user") {
        return ordersObj
          .sort((a, b) => b.user.localeCompare(a.user))
          .filter((order) =>
            order.user.toLowerCase().includes(name.toLowerCase())
          );
      }

      return ordersObj
        .sort((a, b) => b[dropDown] - a[dropDown])
        .filter((order) =>
          order.user.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (dropDown === "user") {
      return ordersObj
        .sort((a, b) => a.user.localeCompare(b.user))
        .filter((order) =>
          order.user.toLowerCase().includes(name.toLowerCase())
        );
    }
    return ordersObj
      .sort((a, b) => a[dropDown] - b[dropDown])
      .filter((order) => order.user.toLowerCase().includes(name.toLowerCase()));
  };

  return (
    <div className="dark:bg-gray-800 p-2 pt-11 dark:text-white">
      <ToastContainer />
      <div className="m-20 h-[65vh]">
        {ordersObj.length === 0 ? (
          <h1 className="text-center h-96 flex justify-center items-center font-bold text-5xl my-24">
            Oders not found!!
          </h1>
        ) : (
          <>
            <div className="flex justify-center items-center my-10 gap-5">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                ref={currValName}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border-[1px] outline-none border-black w-[70vw] dark:border-gray-300 dark:bg-gray-900"
              />

              <select
                onChange={(e) => {
                  setDropDown(e.target.value);
                }}
                defaultValue="select"
                className="px-4 py-2 rounded-md border-[1px] outline-none border-black dark:border-gray-300 dark:bg-gray-900"
              >
                <option value="select" disabled>
                  Select
                </option>
                <option value="user">User</option>
                <option value="orderId">Order Id</option>
                <option value="cheez">cheez</option>
                <option value="salad">salad</option>
              </select>

              <div className="flex justify-center items-center gap-2 align-middle px-4 py-2 rounded-md border-[1px] outline-none border-black dark:border-gray-300 dark:bg-gray-900">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="form-checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label htmlFor="checkbox" className="align-middle">
                  Descending
                </label>
              </div>
            </div>
            <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    Order Id
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    Bread
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    Cheez
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    Tikkis
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    Salad
                  </th>
                  <th className="px-6 py-3 text-center text-base leading-4 font-bold uppercase tracking-wider">
                    ###
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-900">
                {handleSearch(slicedOrders).map((order, index) => (
                  <tr
                    key={index}
                    className="transition-all duration-300 hover:bg-gray-700 hover:text-white"
                  >
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.orderId}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.user.charAt(0).toUpperCase() + order.user.slice(1)}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.bread}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.cheez}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.tikki}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                      {order.salad}
                    </td>
                    <td className="px-6 py-4 text-center flex justify-center items-center gap-3 whitespace-no-wrap">
                      <button
                        onClick={() => updateItem(order.orderId)}
                        className="border-2 border-blue-700 rounded-md text-blue-700 font-bold transition-all duration-300 hover:bg-blue-700 hover:text-white py-2 px-4"
                      >
                        Update Order
                      </button>
                      <button
                        onClick={() => deleteItem(order.orderId)}
                        className="border-2 border-red-700 rounded-md text-red-700 font-bold transition-all duration-300 hover:bg-red-700 hover:text-white py-2 px-4"
                      >
                        Delete Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      <Pagination
        currPage={currPage}
        handleClickPagination={handleClickPagination}
        totalPage={totalPage}
      />
    </div>
  );
}

export default Orders;
