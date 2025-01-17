import React, { useState } from "react";
import readXlsxFile from "read-excel-file";

const Upload = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  const handleChange = async (e) => {
    e.preventDefault();
    //   console.log(e.target.files[0]);
    const data = await readXlsxFile(e.target.files[0]);
    setRestaurantData(data);
  };

  return (
    <div>
      <h1>Upload restaurant data</h1> <br />
      <input
        type="file"
        name="rawData"
        onChange={handleChange}
        accept=".xlsx"
      />
      {restaurantData && (
        <h1 className="text-2xl text-green-600">
          You data is submitted successfully
        </h1>
      )}
      {restaurantData && (
        <table className="w-full">
          {restaurantData.map((row, idx) => (
            <>
              <tr key={idx}>
                {row.map((cell, cellCount) =>
                  idx === 0 ? (
                    <>
                      {cellCount === 0 && (
                        <th className=" border-[4px]">{"S.no"}</th>
                      )}
                      <th className=" border-[4px]">{cell}</th>
                    </>
                  ) : (
                    <>
                      {cellCount === 0 && (
                        <td className=" border-[4px]">{idx} .</td>
                      )}
                      <td className=" border-[4px]">{cell}</td>
                    </>
                  )
                )}
              </tr>
            </>
          ))}
        </table>
      )}
    </div>
  );
};

export default Upload;
