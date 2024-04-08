import React, { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Header from "./components/Header"
import ChangeView from "./ChangeView"

const App = () => {
  const [location, setLocation] = useState({
    lat: 13.99822,
    lng: 0.00463,
  })
  const [center, setCenter] = useState([13.99822, 0.00463])

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
    setCenter([newLocation.lat, newLocation.lng])
  }

  return (
    <div className="font-rubik overflow-hidden">
      <Header setLocation={handleLocationChange} />
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "350px", width: "100%" }}
        className="overflow-hidden"
      >
        <ChangeView center={center} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            {location.lat}, {location.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default App
