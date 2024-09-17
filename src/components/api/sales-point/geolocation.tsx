import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";

export default function Location({ locat, areasId }: any) {
  const [position, setPsition] = useState<[number, number] | undefined>(
    undefined
  );
  ////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setPsition(undefined);
    setTimeout(() => {
      const { latitude, longitude } =
        locat?.find((ele: any) => areasId == ele?.id) || {};
      if (latitude && longitude) setPsition([latitude, longitude]);
    }, 10);
  }, [areasId, locat]);
  ////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const successCallback = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setPsition([latitude, longitude]);
    };
    const errorCallback = (error: any) => {
      console.error(error);
    };
    navigator.geolocation?.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // console.log([locat[0].latitude, locat[0].longitude]);
  // console.log(position);

  return (
    position && (
      <MapContainer
        className="h-[700px] w-[1230px] border-[1px] border-gray-200 rounded-lg"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" >OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locat
          ?.filter((ele: any) => areasId == ele?.id)
          .map(({ latitude, longitude, name, address, number }: any) => {
            return (
              <>
                <CircleMarker
                  center={[latitude, longitude]}
                  radius={10}
                  fillColor="blue"
                >
                  <Popup>
                    <h1 className="font-bold">{name}</h1>
                    <p>{address}</p>
                    <p>{number}</p>
                  </Popup>
                </CircleMarker>
              </>
            );
          })}
      </MapContainer>
    )
  );
}
