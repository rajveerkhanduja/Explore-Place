import { View, Text, TouchableOpacity, Platform, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem';
import Colors from '../../Shared/Colors';
import GoogleMapView from '../Home/GoogleMapView';
import { Ionicons } from "@expo/vector-icons";

export default function PlaceDetail() {
    const param=useRoute().params;
    const [place,setPlace]=useState([]);

    useEffect(()=>{
        setPlace(param.place)
    },[])

    const onDirectionClick=()=>{
        const url=Platform.select({
            ios:"maps:"+place.geometry.location.lat+","+place.geometry.location.lng+"?q="+place.name+","+place.vicinity,
            android:"geo:"+place.geometry.location.lat+","+place.geometry.location.lng+"?q="+place.name+","+place.vicinity,
        });
        Linking.openURL(url);
    }
  return (
    <ScrollView style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        flex:1,
    }}
    contentContainerStyle={{
        paddingBottom:20
    }}>
      <PlaceDetailItem place={place} onDirectionClick={()=>onDirectionClick()}/>
      <GoogleMapView placeList={[place]}/>
      <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        padding:15,
        alignContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:50,
      }} onPress={()=>onDirectionClick()}>
        <Ionicons name="navigate-circle-outline" 
          size={30} color="white" />
        <Text style={{
            fontFamily:'raleway',
            textAlign:'center',
            color:Colors.WHITE,
        }}>Get Direction on Google Maps</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}