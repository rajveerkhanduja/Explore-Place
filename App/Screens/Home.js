import { View, Text, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import Colors from '../Shared/Colors';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { UserLocationContext } from '../Context/UserLocationContext';

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  const GetNearBySearchPlace = (value) => {
    if (location?.coords) {
      GlobalApi.nearByPlace(location.coords.latitude, location.coords.longitude, value)
        .then((resp) => {
          setPlaceList(resp.data.results);
        })
        .catch((err) => console.error('Error fetching nearby places:', err));
    } else {
      console.warn('Location is not available yet.');
    }
  };

  useEffect(() => {
    if (location?.coords) {
      GetNearBySearchPlace('restaurant');
    }
  }, [location]);

  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <Header />
      <GoogleMapView placeList={placeList}/>
      <CategoryList setSelectedCategory={(value)=>GetNearBySearchPlace(value)}/>
      {placeList.length > 0 ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}