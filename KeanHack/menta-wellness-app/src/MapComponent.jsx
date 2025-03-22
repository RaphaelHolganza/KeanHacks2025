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
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div>
      <h1>Find Parks Near You</h1>
      <input
        className="border border-white"
        type="text"
        placeholder="Enter location (e.g., Union, NJ)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="ml-4" onClick={handleSearch}>
        Search
      </button>

      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>Your searched location</Popup>
        </Marker>
        {parks.map((park, index) => (
          <Marker key={index} position={[park.lat, park.lon]} icon={customIcon}>
            <Popup>{park.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
