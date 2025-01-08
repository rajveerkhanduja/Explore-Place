import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceMarker from './PlaceMarker';

export default function GoogleMapView({placeList}) {
  const [mapRegion, setMapRegion] = useState(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0421,
      });
    } else {
      console.warn('Location is not available');
    }
  }, [location]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: '600',
          fontFamily: 'raleway-bold',
        }}
      >
        Top Nearby Places
      </Text>
      <View
        style={{
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        {mapRegion ? (
          <MapView
            style={{
              width: Dimensions.get('screen').width * 0.91,
              height: Dimensions.get('screen').height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker
              title="You"
              coordinate={mapRegion}
            />
            {placeList.map((item,index)=>index<=4&&(
              <PlaceMarker item={item} key={index} />
            ))}
          </MapView>
        ) : (
          <Text>Loading map...</Text>
        )}
      </View>
    </View>
  );
}