import axios from "axios"

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY=""

const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
    "/nearbysearch/json?"+
    "&location="+lat+","+lng+"&radius=15000&type="+type
    +"&key="+API_KEY);

    const searchByText = (searchText, lat, lng) => axios.get(BASE_URL + 
        "/textsearch/json?query=" + searchText +
        "&location=" + lat + "," + lng +
        "&key=" + API_KEY);
      
export default{
    nearByPlace,
    searchByText
}
