import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../index.css";
import { RestaurantsInfo } from "../fake data";

const LeafletMap = () => {
//   var ResIcon = L.Icon.extend({
//     options: {
//       iconSize:     [38, 95],
//       shadowSize:   [50, 64],
//       iconAnchor:   [22, 94],
//       shadowAnchor: [4, 62],
//       popupAnchor:  [-3, -76]
//     }
// });
  return (
    <MapContainer
      center={[34.802075, 38.996815]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {RestaurantsInfo.map((item) => {
        return (
          <Marker
            key={ item.id }
            position={[item.gps.Latitude, item.gps.longitude]}
            >
            <Popup>
              <div>
                <h2 className="font-bold">{ item.name }</h2>
                <p>{ "Rate: " + item.rate }</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default LeafletMap;
