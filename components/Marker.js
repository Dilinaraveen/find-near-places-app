import { InfoBox, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import { BusinessListContext } from "../context/BusinessListContext";

function Marker({ userLocation }) {
  const { businessList, setBusinessList } = useContext(BusinessListContext);

  return (
    <div>
      {businessList &&
        businessList.map((business, index) => (
          <MarkerF
            key={index}
            position={business.geometry.location}
            icon={{
              url: "/businessMarker.png",
              scaledSize: {
                width: 20,
                height: 30,
              },
            }}
          >
            <InfoBox position={business.geometry.location}>
              <div
                style={{
                  backgroundColor: "white",
                  backgroundColor: "#c084fc",
                  opacity: 1,
                  padding: 7,
                  color: "white",
                  borderRadius: 10,
                  width: 100,
                  
                  overflowX: 'hidden',
                 
                }}
              >
                <div style={{ fontSize: 13, fontColor: `#08233B`,overflowX: 'hideen' }}>
                  {business.name}
                </div>
              </div>
            </InfoBox>
          </MarkerF>
        ))}
      <MarkerF position={userLocation}></MarkerF>
    </div>
  );
}

export default Marker;
