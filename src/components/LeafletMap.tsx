import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import "../index.css";
import { RestaurantsInfo } from "../fake data";
import Cards from "./Cards";
// type countries = "Aleppo" | "Homs" | "Damascus" | "Latakia" | undefined;

const circleMarker = [
  {
    Longitude: 36.158965637881354,
    latitude: 37.500032705638436,
    radius: 40,
    location: 'Aleppo',
  },
  {
    Longitude: 35.5407103,
    latitude: 35.9952667,
    radius: 20,
    location: 'Latakia',
  },
  {
    Longitude: 34.6324273,
    latitude: 37.5136959,
    radius: 40,
    location: 'Homs',
  },
  {
    Longitude: 33.510414,
    latitude: 36.278336,
    radius: 20,
    location: 'Damascus',
  },
]

const LeafletMap = () => {
  const [city, setCity] = useState('');
  return (
    <>
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
              key={item.id}
              position={[item.gps.Latitude, item.gps.longitude]}
              eventHandlers={{
                click: (e) => {
                  setCity(item.location)
                }
              }}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">{"Name: " + item.name}</h2>
                  <p>{"Rate: " + item.rate}</p>
                </div>
              </Popup>
            </Marker>
          );
        })
        }

        {circleMarker.map((country) => {
          return (
            <CircleMarker
              center={[country.Longitude, country.latitude]}
              color="transparent"
              radius={ country.radius }
              eventHandlers={{
                click: () => {
                  setCity(country.location)
                },
              }}
            >
              <Popup>{country.location}</Popup>
            </CircleMarker>
          )
        })
        }
      </MapContainer>

      {RestaurantsInfo.filter((card) => {
        if (card.location === city) {
          return card;
        } else {
          return false;
        }
      }).map((item) => {
        return (
          <Cards key={ item.id } name={ item.name } img={ item.img } paymentMethod={ item.paymentImg} rate={ item.rate } time={ item.time } delivery={ item.delivery } lowest={ item.lowest } location={ item.location } />
        );
      })}
    </>
  );
};

export default LeafletMap;
