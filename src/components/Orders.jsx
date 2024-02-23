import React, {useState, useEffect} from 'react';
import Cheez from './Cheez';

function Orders() {
    const [ordersObj, setOrdersObj] = useState([]);

  const deleteItem = (orderId) => {
    let newOrders = ordersObj.filter(order => order.orderId !== orderId);
    localStorage.setItem("orders", JSON.stringify(newOrders));
    setOrdersObj(newOrders);
  }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("orders")) || [];
        setOrdersObj(data);
    }, []);

  return (
    <div className='m-20'>
        {ordersObj.length === 0 ? (
          <h1 className="text-center h-96 flex justify-center items-center font-bold text-5xl">Oders not found!!</h1>
        ) : (
          <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Order Id
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Bread
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Cheez
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Tikkis
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Salad
                </th>
                <th className="px-6 py-3 bg-gray-200 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  ##
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {ordersObj.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.orderId}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.user.charAt(0).toUpperCase() + order.user.slice(1)}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.bread}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.cheez}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.tikki}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap">{order.salad}</td>
                  <td className="px-6 py-4 text-center whitespace-no-wrap"><button onClick={() => deleteItem(order.orderId)} className='border-2 border-red-700 rounded-md text-red-700 transition-all duration-300 hover:bg-red-700 hover:text-white py-2 px-4'>Delete Order</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

    </div>
  )
}

export default Orders