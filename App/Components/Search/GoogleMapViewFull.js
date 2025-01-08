import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "../../Context/UserLocationContext";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PlaceMarker from "../Home/PlaceMarker";
import PlaceList from "../Home/PlaceList";

export default function GoogleMapViewFull({ placeList }) {
  const [mapRegion, setMapRegion] = useState(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location?.coords) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0421,
      });
    } else {
      console.warn("Location is not available");
    }
  }, [location]);

  return (
    <View>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.9,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion} />
          {placeList.map(
            (item, index) =>
              index <= 4 && <PlaceMarker item={item} key={index} />
          )}
        </MapView>
      ) : null}
    </View>
  );
}