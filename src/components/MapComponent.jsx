import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import doctors from '../data/doctors.json';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

export default function MapComponent() {
  const defaultPos = [22.9734, 78.6569]; // Center of India
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(doctors); // Use static JSON data directly
  }, []);

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Doctors Map</h2>
      <MapContainer center={defaultPos} zoom={5} style={{ height: '700px', width: '70%' }} className="rounded-xl">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((doc) => (
          <Marker key={doc.id} position={[doc.lat, doc.lon]}>
            <Popup>
              <strong>{doc.name}</strong><br />
              {doc.specialty}<br />
              {doc.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


