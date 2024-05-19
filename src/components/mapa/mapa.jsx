import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

<<<<<<< HEAD
import iconUrl0 from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl0 from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: iconUrl0,
  iconRetinaUrl: iconRetinaUrl0,
=======
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconRetinaUrl,
>>>>>>> fbc934eb708e0a27c041a7278061bdc75ee80451
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  return (
    <MapContainer center={[-33.3351525813574, -60.22430281421153]} zoom={13} style={{ height: '250px', width: '250px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-33.3351525813574, -60.22430281421153]}>
        <Popup>
<<<<<<< HEAD
          E.E.S.T Nº2 Gral. Ing. Manuel N. Savio
=======
          A pretty CSS3 popup. <br /> Easily customizable.
>>>>>>> fbc934eb708e0a27c041a7278061bdc75ee80451
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
