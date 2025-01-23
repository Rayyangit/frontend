// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";

// const Filter = ({ handleFilterChange, handleDateChange, startDate, endDate }) => {
//   const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("");

//   // Filter categories list
//   const filters = [
//     "Restaurant",
//     "Tiffins",
//     "Comments",
//     "Flags",
//     "Moderator",
//     "Live Events",
//     "System",
//     "Region",
//     "Status",
//   ];

//   // Handle selection of a filter category
//   const handleFilterSelect = (filter) => {
//     setSelectedFilter(filter);
//     handleFilterChange(filter);
//     setFilterDropdownOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-end mt-2">
//       {/* Filter button */}
//       <div className="relative">
//         <button
//           className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
//         >
//           <FaFilter />
//           <span>{selectedFilter || "Filter"}</span>
//         </button>

//         {/* Dropdown filter list */}
//         {filterDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
//             <ul className="py-2">
//               {filters.map((filter) => (
//                 <li
//                   key={filter}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleFilterSelect(filter)}
//                 >
//                   {filter}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Date range filters */}
//       <div className="mt-3 flex gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Start Date:</label>
//           <input
//             type="date"
//             className="mt-1 p-2 border rounded w-40"
//             value={startDate}
//             onChange={(e) => handleDateChange("startDate", e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">End Date:</label>
//           <input
//             type="date"
//             className="mt-1 p-2 border rounded w-40"
//             value={endDate}
//             onChange={(e) => handleDateChange("endDate", e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;
