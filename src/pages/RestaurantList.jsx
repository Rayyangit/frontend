import React, { useEffect, useRef, useState } from "react";

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
import Cuisines from "../components/Admin/Cuisines.jsx";
import FoodCategory from "../components/Admin/FoodCategory.jsx";
import CommentList from "../components/Admin/CommentList.jsx";
import Hero from "../components/Admin/Hero.jsx";
import { Restaurants, listedTabs, resList } from "../data/info.js";
import OfferList from "../components/Admin/OfferList.jsx";
import { restaurantReviews } from "../data/dummy.js";
import CommentList2 from "../components/Admin/CommentList2.jsx";

const RestaurantList = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [toggleIdx, setToggleIdx] = useState(1);
  const [dropdownIdx, setDropdownIdx] = useState(-1);
  const [formData, setFormData] = useState({
    name: resList[toggleIdx].name,
    description: resList[toggleIdx].description,
    location: resList[toggleIdx].location,
    email: resList[toggleIdx].contact.email,
    contact: resList[toggleIdx].contact.contactNumber,
  });
  const [viewComments, setViewComments] = useState("user");

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
      threshold: 0.75, // 75% of the section is visible
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

  const moreComments = () => {};

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
      alert("Restaurant with this id Details are changed");
      setIsEditable(false);
    } else {
      alert("You can edit detail now");
      setIsEditable(true);
    }
  };

  const filter = ["Menu", "Offers", "Flag", "Comments", "Others"];

  const OverViewSection = () => {
    return (
      <>
        {/* statistic cards */}
        <div className="flex gap-4  px-2 flex-wrap">
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
          types={resList[toggleIdx].serviceTypes}
          title={"Services Offered"}
        />

        {/* food category */}
        <FoodCategory
          title={"Categories"}
          category={resList[toggleIdx].foodCategory}
        />

        {/* cuisines */}
        <Cuisines cuisines={resList[toggleIdx].cuisines} title={"Cuisines"} />
      </>
    );
  };

  const FeaturesSection = () => {
    return (
      <>
        {/* features */}

        <Features title={"Features"} features={resList[toggleIdx].features} />

        {/* payment options */}
        <OptionContainer
          title={"Payment Methods"}
          types={resList[toggleIdx].paymentOptions}
        />

        {/* { delivery area} */}
        <DeliveryAreas
          deliveryAreas={resList[toggleIdx].deliveryAreas}
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
          menu={resList[toggleIdx].menu}
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
        <CommentList
          setViewComments={setViewComments}
          viewComments={viewComments}
          restaurantReviews={restaurantReviews}
        />
      </>
    );
  };

  return (
    <div className="w-full ">
      <div className="h-[90vh] flex ">
        {/* sidebar for restaurant list */}
        <Listing
          categories={Restaurants}
          filter={filter}
          handleSwitch={handleSwitch}
        />
        {viewComments ? (
          <div className="flex-grow ps-8 pb-4 overflow-y-scroll overflow-x-hidden box-border bg-white">
            <div className="flex justify-end">
              <button
                className="bg-gray-200 p-1 px-4 rounded-md font-semibold m-1"
                onClick={toggleEdit}
              >
                {isEditable ? "Save" : "Edit"}
              </button>
            </div>

            <Hero
              resData={resList[toggleIdx]}
              isEditable={isEditable}
              formData={formData}
              setFormData={setFormData}
            />

            {/* tabs */}
            <div className="flex w-full font-semibold bg-white z-10 rounded-lg sticky  top-0 justify-evenly space-x-4 p-2 pt-0 box-border">
              {listedTabs.map(({ id, tab, label }) => (
                <button
                  key={tab}
                  className={`rounded-sm no-underline p-2 border-b-2 box-border width-[90%] ${
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
            <div className="w-full scroll-container">
              <section
                ref={sectionRefs.tab1}
                id="tab1"
                className="h-auto w-full"
              >
                <OverViewSection />
              </section>
              <section
                ref={sectionRefs.tab2}
                id="tab2"
                className="h-auto w-full"
              >
                <FeaturesSection />
              </section>
              <section
                ref={sectionRefs.tab3}
                id="tab3"
                className="h-auto w-full"
              >
                <MenuSection />
              </section>
              <section
                ref={sectionRefs.tab4}
                id="tab4"
                className="h-auto w-full"
              >
                <CommentSection />
              </section>
            </div>
          </div>
        ) : (
          <CommentList2
            setViewComments={setViewComments}
            viewComments={viewComments}
            restaurantReviews={restaurantReviews}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
