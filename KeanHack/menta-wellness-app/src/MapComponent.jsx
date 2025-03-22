import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import greenMarker from "./assets/greenmark.png"; // Adjust based on the actual path

const customIcon = new L.Icon({
  iconUrl: greenMarker,
  iconSize: [, 41],
  iconAnchor: [12, 41],
});
const MapComponent = () => {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState([40.697589, -74.263163]); // Default to Union, NJ
  const [parks, setParks] = useState([]);
  const [text, setText] = useState('Initial Text');

    // Function to handle state change
    const changeText = () => {
      setText('Text has been updated!');
    };

  const handleSearch = async () => {
    if (!location) return;

    try {
      // Geocode the user input
      const geoResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
      );

      if (geoResponse.data.length === 0) {
        alert("Location not found!");
        return;
      }

      const { lat, lon } = geoResponse.data[0];
      setPosition([parseFloat(lat), parseFloat(lon)]);

      // Search for parks near the location
      const parkResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=park+near+${lat},${lon}`
      );

      setParks(
        parkResponse.data.map((park) => ({
          name: park.display_name,
          lat: parseFloat(park.lat),
          lon: parseFloat(park.lon),
        }))
      );
      changeText("Location Found Please Look");
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div>
      <h1>Find Parks Near You</h1>
      <p>{}</p>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">Carto</a> contributors'
        />{" "}
        {parks.map((park, index) => (
          <Marker key={index} position={[park.lat, park.lon]} icon={customIcon}>
            <Popup>
              {/* Green banner */}
              <div className="bg-[#9CBA7F] text-white font-bold text-center py-1 rounded-t-lg">
                {park.name}
              </div>
              {/* Coordinates */}
              <div className="text-gray-700 text-sm mt-2 text-center">
                📍 {park.lat.toFixed(4)}, {park.lon.toFixed(4)}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button className="ml-4 mt-4" onClick={handleSearch}>
        Search
      </button>
      <input
        className="border border-black text-black ml-5 mt-4"
        type="text"
        placeholder="Enter location (e.g., Union, NJ)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default MapComponent;
