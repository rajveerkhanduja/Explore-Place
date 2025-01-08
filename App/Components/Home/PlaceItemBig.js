import { View, Text, Image } from 'react-native'
import React from 'react'
import HorizontalLine from './HorizontalLine'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../Shared/Colors';

export default function PlaceItemBig({place}) {
  return (
    <View style={{marginTop:15}}>
        {place?.photos?
        <Image source={{uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=API_KEY",
        }}
        style={{width:"100%", height:180, borderRadius: 15}}/>:null}
        <Text style={{fontSize:18, marginTop:5, fontFamily:'raleway-bold'}}
        numberOfLines={2}>
            {place.name}
        </Text>
        <Text style={{fontSize:16, marginBottom:5, color:Colors.DARK_GRAY}}
        numberOfLines={2}>
            {place.vicinity}
        </Text>
        <View style={{
            display:'flex',
            alignItems:'center',
            gap:5,
            flexDirection:'row',
        }}>
            <FontAwesome name="star" size={20} color={Colors.YELLOW} />
            <Text>
                {place.rating}
            </Text>
        </View>
        <HorizontalLine/>
    </View>
  );
}
