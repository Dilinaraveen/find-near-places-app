import { useEffect, useState } from "react";
import "../styles/globals.css";
import { UserLocationContext } from "../context/UserLocationContext";

function MyApp({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    getUserlocation();
  }, []);

  const getUserlocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    });
  };
  return (
    <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <Component {...pageProps} />
    </UserLocationContext.Provider>
  );
}

export default MyApp;
