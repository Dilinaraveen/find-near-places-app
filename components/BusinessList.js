import React, { useContext, useEffect, useState } from "react";
import BusinessItem from "./BusinessItem";
import ShimmerEffectItem from "./ShimmerEffectItem";
import { SelectedBusinessContext } from "../context/SelectedBusinessContext";

function BusinessList({ businessListData }) {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setLoader(true);
    setCount(0);
  }, [businessListData]);

  console.log("Business List", businessListData);
  return (
    <div>
      <h2 className="text-[20px] font-bold mt-3 mb-3 flex items-center justify-between">
        Top Nearby Places
        <span className="flex">
          {/* Left */}
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setCount(count - 3)}
              className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}

          {/* Right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setCount(count + 3)}
            className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>
      {!loader ? (
        <div>
          {businessListData.map(
            (business, index) =>
              index >= count &&
              index < count + 3 && (
                <div
                  key={index}
                  className={`cursor-pointer ${selectedBusiness.name==business.name ? 'bg-purple-200' : null} rounded-2xl`}
                  onClick={() => setSelectedBusiness(business)}
                >
                  <BusinessItem business={business} />
                </div>
              )
          )}
        </div>
      ) : null}

      {loader
        ? [1, 2, 3].map((item, index) => <ShimmerEffectItem key={index} />)
        : null}
    </div>
  );
}

export default BusinessList;
