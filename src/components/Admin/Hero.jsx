import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import OpeningTime from "./OpeningTime";
import { FiImage } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";

const Hero = ({ resData, isEditable, setFormData, formData }) => {
  const [timing, setTiming] = useState(false);

  const handleFormDataChange = (evt) =>
    setFormData((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));

  const editStateStyle = `w-auto focus:outline-0 bg-transparent`;

  return (
    <>
      {isEditable ? (
        <div className="relative flex flex-col m-2 gap-x-3  lg:flex-row ">
          <div className=" flex flex-grow flex-col flex-wrap xl:w-[35%] w-full justify-evenly">
            <h1 className="text-[28px] font-semibold flex justify-between ">
              <input
                type="text"
                value={formData.name}
                name="name"
                onChange={handleFormDataChange}
                className={editStateStyle}
              />
              <button
                className={`border-0 bg-transparent px-4 active:border-0`}
              >
                <IoArrowForward className="text-[#DC2626] text-[28px]" />
              </button>
            </h1>
            <div className="flex items-center gap-1 pt-2 opacity-50 ">
              <GrLocation className=" w-[28px] " />
              <input
                className={`text-sm flex-grow w-auto ${editStateStyle}`}
                value={formData.location}
                name="location"
                onChange={handleFormDataChange}
              />
            </div>
            <div className="text-[12px] font-medium flex items-center relative">
              Opening From 9:00am to 1:00pm
              <button
                className="ms-1"
                onMouseOver={() => setTiming(true)}
                onMouseOut={() => setTiming(false)}
              >
                <IoInformationCircleOutline />
              </button>
              {/* opening time */}
              {timing && (
                <OpeningTime
                  time={Object.entries(resData.openingHours)} //key-value pair
                  title={"Opening Time"}
                />
              )}
              <div className=" text-[18px] lg:text-[14px] items-center flex  gap-2 mx-2 ">
                {" "}
                <a href="facebook.com ">
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="instagram.com">
                  {" "}
                  <FaInstagram />
                </a>
              </div>
            </div>
            <textarea
              className={`block text-[12px] w-full p-2 text-left align-middle ${editStateStyle}`}
              spellCheck={false}
              value={formData.description}
              rows={4}
              name="description"
              onChange={handleFormDataChange}
            />
            {/* contact detail */}
            <div className="w-full">
              <div className="flex md:flex-nowrap flex-wrap p-4 bg-gray-100  font-semibold rounded-[12px] my-4 text-[14px] ">
                <div className="flex items-center w-[100%] md:w[50%]">
                  {" "}
                  <HiOutlineMail className="text-[18px] me-1" />
                  Email:
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleFormDataChange}
                    className={editStateStyle}
                  />
                </div>
                <div className="flex items-center w-[100%] md:w-[50%]">
                  {" "}
                  <MdLocalPhone className="text-[18px] me-1" />
                  Contact:
                  <input
                    type="text"
                    value={formData.contact}
                    name="contact"
                    onChange={handleFormDataChange}
                    className={editStateStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="lg:w-[350px] w-full flex items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full  rounded-xl "
            />
          </div>
        </div>
      ) : (
        <div className="flex m-2 gap-x-3 flex-col lg:flex-row ">
          <div className="flex-grow flex flex-col flex-wrap xl:w-[35%] w-full justify-evenly">
            <h1 className="text-[28px] font-semibold flex justify-between ">
              {formData.name}
              <button
                className={`border-0 bg-transparent px-4 active:border-0`}
              >
                <IoArrowForward className="text-[#DC2626] text-[28px]" />
              </button>
            </h1>
            <div className="flex items-center gap-1 pt-2 opacity-50 ">
              <GrLocation className=" w-[28px] " />
              <span className="text-sm flex-grow">{formData.location}</span>
            </div>
            <div className="text-[12px] font-medium flex items-center relative">
              Opening From 9:00am to 1:00pm
              <button
                className="ms-1"
                onMouseOver={() => setTiming(true)}
                onMouseOut={() => setTiming(false)}
              >
                <IoInformationCircleOutline />
              </button>
              {/* opening time */}
              {timing && (
                <OpeningTime
                  time={Object.entries(resData.openingHours)} //key-value pair
                  title={"Opening Time"}
                />
              )}
              <div className=" text-[18px] lg:text-[14px] items-center flex  gap-2 mx-2 ">
                {" "}
                <a href="facebook.com ">
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="instagram.com">
                  {" "}
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="text-[12px] p-2">{formData.description}</div>

            <div className="w-full">
              <div className="flex  flex-wrap md:flex-nowrap p-4 bg-gray-100  font-semibold rounded-[12px] my-4 text-[14px] ">
                <div className="flex items-center  w-[100%] md:w-[50%]">
                  {" "}
                  <HiOutlineMail className="text-[18px] me-1" />
                  Email:
                  <div>{formData.email}</div>
                </div>
                <div className="flex items-center w-[100%] md:w-[50%]">
                  {" "}
                  <MdLocalPhone className="text-[18px] me-1" />
                  Contact:
                  <div>{formData.contact}</div>
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="lg:w-[350px] w-full flex items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full  rounded-xl "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
