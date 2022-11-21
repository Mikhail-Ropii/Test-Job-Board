import { LocationPin } from "./LocationPin";

import GoogleMapReact from "google-map-react";

interface MapProps {
  address: string;
  location: {
    lat: number;
    long: number;
  };
}

export const Map = ({ location, address }: MapProps) => {
  const API_KEY: string = process.env.REACT_APP_GOOGLE_API_KEY as string;
  const lng = location.long;
  const lat = location.lat;
  return (
    <div className="h-[218px] rounded-br-lg rounded-bl-lg">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={10}
      >
        <LocationPin lat={location.lat} lng={location.long} address={address} />
      </GoogleMapReact>
    </div>
  );
};
