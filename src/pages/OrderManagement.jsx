import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaPhoneAlt } from "react-icons/fa";

const OrderManagement = ({ orders, sectionTitle }) => {
  const [ordersList, setOrdersList] = useState(orders);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const navigate = useNavigate();

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(orderId); // Set selected order for modal
  };

  const handleCloseModal = () => {
    setSelectedOrderId(null); // Close the modal
  };

  const handleConfirm = (orderId) => {
    setOrdersList((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Confirmed" } : order
      )
    );
  };

  const handleReject = (orderId) => {
    setOrdersList((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Rejected" } : order
      )
    );
  };

  const handleContactRestaurant = (restaurant) => {
    alert(`Contacting restaurant: ${restaurant}`);
  };

  return (
    <div className="p-1 ">
      <h3 className="text-xl font-semibold mb-1">{sectionTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1">
        {ordersList.map((order) => (
          <div
            key={order.id}
            className="bg-white p-2 rounded-lg shadow-lg flex flex-col justify-between w-full"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-medium text-gray-800">
                ORDER ID - {order.id}
              </h4>
              <img
                src="/info.png"
                alt="Info"
                className="w-4 h-4 cursor-pointer"
                onClick={() => handleOrderClick(order.id)}
              />
            </div>

            {/* Date, Time, and Restaurant */}
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-800">{order.restaurant}</p>
              <p className="text-xs text-gray-500">
                {order.date} | {order.time}
              </p>
            </div>

            {/* Item Details */}
            <div className="flex items-center mb-1">
              <img
                src={order.image}
                alt={order.item}
                className="w-16 h-16 object-cover rounded-full mr-1"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {order.item} x {order.quantity}
                </p>
                <p className="text-xs text-gray-600">{order.payment}</p>
              </div>
            </div>

            {/* Category and Subcategory */}
            <div className="flex justify-between mb-0 text-sm text-gray-600">
              <p >Cat: {order.category}</p>
              <p >Sub: {order.subcategory}</p>
            </div>

            {/* Price */}
            <div className="mb-1 text-sm font-bold text-gray-800">
              Order Price -{" "}
              <span className="text-blue-500">${order.price.toFixed(2)}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around items-center mb-1">
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  order.status === "pending"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={order.status !== "pending"}
                onClick={() => handleConfirm(order.id)}
              >
                <FaCheck />
              </button>
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  order.status === "pending"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={order.status !== "pending"}
                onClick={() => handleReject(order.id)}
              >
                <FaTimes />
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                onClick={() => handleContactRestaurant(order.restaurant)}
              >
                <FaPhoneAlt />
              </button>
            </div>

            {/* Status */}
            {order.status && (
              <div className="text-sm font-bold text-gray-800">
                Status: <span className="capitalize">{order.status}</span>
              </div>
            )}
          </div>
        ))}
      </div>



  

      {/* Modal */}
      {selectedOrderId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-1 rounded-lg shadow-lg max-w-lg w-full relative">
          <button
  className="absolute top-2 right-2 font-bold text-xl leading-none hover:opacity-0"
  onClick={handleCloseModal}
  aria-label="Close"
>
  <img src="/icons/close.png" alt="Close" className="w-2 h-2" />
</button>

            {ordersList
              .filter((order) => order.id === selectedOrderId)
              .map((order) => (
                <div key={order.id}>
                  <h3 className="text-center font-bold text-lg mb-1">Order Details</h3>
                  <div className="flex items-center mb-1">
                    <img
                      src={order.image}
                      alt={order.restaurant}
                      className="w-20 h-20 object-cover rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{order.restaurant}</h2>
                      <p className="text-sm text-gray-600">{order.address}</p>
                    </div>
                  </div>
                  <div className="border-t border-b py-1 mb-1">
                    <div className="grid grid-cols-3 text-sm items-center mb-1">
                      <div className="col-span-2 flex justify-between items-center">
                        <div className="flex items-center">
                          <img
                            src="/icons/veg.png"
                            alt="Veg"
                            className="w-4 h-4 ml-0"
                          />
                          <p className=""> Coke Pet - 750 Ml</p>
                        </div>
                      </div>
                      <p className="text-right">₹38.00</p>

                      <div className="col-span-2 flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <img
                            src="/icons/nonveg.png"
                            alt="Non-Veg"
                            className="w-4 h-4 ml-0 mb-2"
                          />
                          <p className="mb-2"> Chicken Biryani - 500mg</p>
                        </div>
                      </div>
                      <p className="text-right mb-2">₹149.00</p>
                      
                 

                      <p className="col-span-2 ">Item Total</p>
<p className="text-right">₹187.00</p>


<p className="col-span-2 text-green-600">Coupon (TASTY)</p>
<p className="text-right text-green-600 font-medium">-₹74.50</p>

<p className="col-span-2 mt-1">Taxes & Charges</p>
<p className="text-right">₹30.19</p>

<p className="col-span-2 text-green-600">Your Total Savings</p>
<p className="text-right text-green-600 font-medium">₹74.50</p>

<p className="col-span-2 font-semibold">Grand Total</p>
<p className="text-right font-semibold">₹171.68</p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 font-bold mt-4">Order Details</h4>
                      <p>ORDER ID: 4117307093</p>
                      <p>PAYMENT: Paid</p>
                      <p>DATE: 2025-01-15</p>
                      <p>PHONE NUMBER: 411730709XXX</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
