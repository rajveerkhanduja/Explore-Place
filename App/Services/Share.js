import { Share } from "react-native"

const SharePlace=(place)=>{
    Share.share({
        title: 'Share Location',
        message: 'Business Name: '+place.name+"\n"+"Address: "+place.vicinity+"\n"+"Rating: "+place.rating+"\n\n"+'https://www.google.com/maps/search/?api=1&query='+place.geometry.location.lat+','+place.geometry.location.lng,
    })
}

export default{
    SharePlace
}