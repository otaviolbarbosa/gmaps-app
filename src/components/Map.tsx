"use client";

import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import "./map.css";
import Pin from "./Pin";
import Search from "./Search";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY as string,
  });

  const center = useMemo(() => ({ lat: -13.4199179, lng: -62.8083637 }), []);

  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={4}
        >
          {/* <Marker position={{ lat: 18.52043, lng: 73.856743 }} /> */}
        </GoogleMap>
      )}
      <Search />
    </div>
  );
};

export default Map;