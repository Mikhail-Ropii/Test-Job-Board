import { ImLocation } from "react-icons/im";

interface LocationPinProps {
  address: string;
  lat: number;
  lng: number;
}

export const LocationPin = ({ address }: LocationPinProps) => (
  <div className="flex">
    <div>
      <ImLocation color="#D8D8D8" size={36} />
    </div>
    <p className="pin-text">{address}</p>
  </div>
);
