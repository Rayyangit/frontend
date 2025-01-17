import React, { useEffect, useRef, useState } from "react";

import { IoInformationCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { GrLocation } from "react-icons/gr"; //location icon
import { IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import Filter from "../components/Admin/Filter.jsx";
import { GrView } from "react-icons/gr";
import { LiaCommentSolid } from "react-icons/lia";
import { GiCash } from "react-icons/gi";
import TopBar from "../utils/TopBar.jsx";
import Listing from "../components/Admin/Listing.jsx";
import MenuListing from "../components/Admin/MenuListing.jsx";
import StatisticCard from "../components/Admin/StatisticCard.jsx";
import OptionContainer from "../components/Admin/OptionContainer.jsx";
import DeliveryAreas from "../components/Admin/DeliveryAreas.jsx";
import Features from "../components/Admin/Features.jsx";
import OpeningTime from "../components/Admin/OpeningTime.jsx";
import OfferCard from "../components/Admin/OfferCard.jsx";
import Cuisines from "../components/Admin/Cuisines.jsx";
import FoodCategory from "../components/Admin/FoodCategory.jsx";
import CommentList from "../components/Admin/CommentList.jsx";
import { NavLink, useParams } from "react-router-dom";
import Hero from "../components/Admin/Hero.jsx";
import {
  features,
  features2,
  resData,
  categories,
  restaurants,
  listedTabs,
} from "../data/info.js";
import OfferList from "../components/Admin/OfferList.jsx";

const RestaurantList = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [toggleIdx, setToggleIdx] = useState(1);
  const [dropdownIdx, setDropdownIdx] = useState(-1);
  const [formData, setFormData] = useState({
    name: "Burger Paradise",
    description: `Located in the heart of the city, The Golden Fork Bistro is a cozyyet modern restaurant offering a fusion of global flavors with a local touch. Known for its welcoming ambiance, this dining spot combines rustic decor with contemporary charm, making it the perfectplace for a casual lunch or a romantic dinner.`,
    location: "123 Foodie Lane, Flavor Town",
    email: "burgerparadise.com",
    contact: "6816473647",
  });

  const [activeTab, setActiveTab] = useState("tab1");
  const sectionRefs = {
    tab1: useRef(null),
    tab2: useRef(null),
    tab3: useRef(null),
    tab4: useRef(null),
  };
  //for scrollspy
  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      threshold: 0.75, // 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id); // Set active tab based on the section in view
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect(); // Clean up on unmount
  }, [sectionRefs]);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  //to cusinies dropdown
  const handleDropdown = (idx) => {
    console.log(idx);
    setDropdownIdx((prev) => (prev === -1 ? idx : -1));
  };

  const handleSwitch = (id) => {
    setToggleIdx((prev) => {
      if (prev !== id) {
        return id;
      } else {
        return prev;
      }
    });
  };

  const toggleEdit = (id) => {
    if (isEditable === true) {
      //request to the backend
      console.log("I am edited");
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };
  const saveChanges = () => {};

  const filter = ["Restaurant", "Menu", "Offers", "Flag", "Comments"];

  const OverViewSection = () => {
    return (
      <>
        {/* statistic cards */}
        <div className="flex gap-4 mt-4 px-4 flex-wrap">
          <StatisticCard
            label="Views"
            lastMonth={"3,780"}
            total={"671,120"}
            icon={<GrView />}
          />
          <StatisticCard
            label="Comments"
            lastMonth={"180"}
            total={"6,120"}
            icon={<LiaCommentSolid />}
          />
          <StatisticCard
            label="Cash Flow"
            lastMonth={"23,780"}
            total={"671,120"}
            icon={<GiCash />}
          />
        </div>

        {/* restaurant type */}
        <OptionContainer
          types={restaurants[toggleIdx].types}
          title={"Restaurant Type"}
        />

        {/* food category */}
        <FoodCategory title={"Category"} />

        {/* opening time */}
        {/* <OpeningTime
            time={Object.entries(resData.openingHours)} //key-value pair
            title={"Opening Time"}
          /> */}

        {/* cuisines */}
        <Cuisines
          cuisines={restaurants[toggleIdx].cuisines}
          title={"Cuisines"}
        />
      </>
    );
  };

  const FacilitiesSection = () => {
    return (
      <>
        {/* features */}
        <Features title={"Features"} features={features} />

        {/* payment options */}
        <OptionContainer
          title={"Payment Options"}
          types={resData.paymentOptions}
        />

        {/* { delivery area} */}
        <DeliveryAreas
          deliveryAreas={resData.deliveryAreas}
          title={"Delivery Areas"}
        />
      </>
    );
  };

  const MenuSection = () => {
    return (
      <>
        {/* offers */}
        <OfferList />
        {/* menu list */}
        <MenuListing
          menu={restaurants[toggleIdx].menu}
          dropdownIdx={dropdownIdx}
          handleDropdown={handleDropdown}
          title={"Menu"}
        />
      </>
    );
  };

  const CommentSection = () => {
    return (
      <>
        {/* comment list */}
        <CommentList />
      </>
    );
  };

  return (
    <div className="w-full">
      {/* topber with title and search */}
      <TopBar title={"Listed Restaurants"} />
      <div className="h-screen flex ">
        {/* sidebar for restaurant list */}
        <Listing categories={categories} filter={filter} />
        {/* main showcase  */}
        <div className="flex-grow ps-8 pb-4 overflow-y-scroll overflow-x-hidden bg-white">
          <div className="flex justify-end">
            <button
              className="bg-gray-200 p-1 px-4 rounded-md font-semibold m-1"
              onClick={toggleEdit}
            >
              {isEditable ? "Save" : "Edit"}
            </button>
          </div>

          <Hero
            resData={resData}
            isEditable={isEditable}
            formData={formData}
            setFormData={setFormData}
          />

          {/* tabs */}
          <div className="flex font-semibold bg-white z-10 rounded-lg sticky top-0 justify-evenly space-x-4 p-4 pt-0">
            {listedTabs.map(({ id, tab, label }) => (
              <button
                key={tab}
                className={`rounded-sm no-underline p-2 border-b-2  ${
                  activeTab === tab
                    ? "border-[#DC2626] text-[#DC2626]"
                    : "border-white"
                }`}
                onClick={() => scrollToSection(tab)}
              >
                {label}
              </button>
            ))}
          </div>
          {/* all listed sections */}
          <div className="w-full">
            <section ref={sectionRefs.tab1} id="tab1" className="h-auto py-4">
              <OverViewSection />
            </section>
            <section ref={sectionRefs.tab2} id="tab2" className="h-auto py-4">
              <FacilitiesSection />
            </section>
            <section ref={sectionRefs.tab3} id="tab3" className="h-auto py-4">
              <MenuSection />
            </section>
            <section ref={sectionRefs.tab4} id="tab4" className="h-auto py-4">
              <CommentSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
