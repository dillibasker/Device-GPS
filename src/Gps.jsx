import { useState } from "react";

const GeoSensor = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => alert("Geolocation not supported or permission denied!")
      );
    }
  };

  return (
    <div>
      <h2>GPS Location</h2>
      <button onClick={getLocation}>Get Location</button>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lon}</p>
    </div>
  );
};

export default GeoSensor;
