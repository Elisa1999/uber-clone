import React, {useState, useEffect} from "react";
import { View, TextInput, SafeAreaView} from "react-native";
import styles from './style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./PlaceRow";
import { useNavigation } from "@react-navigation/native";

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    const homePlace = {
      description: 'Home',
      geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
    };
    const workPlace = {
      description: 'Work',
      geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
    };

    const navigation = useNavigation();

    useEffect(() => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
              originPlace, destinationPlace
            })
        }
        }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
        <View style = {styles.container}>
        <GooglePlacesAutocomplete
         placeholder='From?'
         onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data, details}); }}
        enablePoweredByContainer = {false}
        currentLocation = {true}
        currentLocationLabel = 'Current location'
        styles ={{
            textInput: styles.textInput,
            container:{
              position:'absolute',
              top:10,
              left:10, 
              right:10,
            },
            listView:{
              position:'absolute',
              top: 120
            },
            separator:styles.separator
        }}
      query={{
        key: 'AIzaSyBgA8pR7mtv4ZvESDqthfKKQYWhKbuifY0',
        language: 'en',
      }} 
      renderRow = {(data) => <PlaceRow data = {data}/>} 
      renderDescription = {(data) => data.description || data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
      />
      <GooglePlacesAutocomplete
         placeholder='Where to?'
         onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data, details}); }}
        enablePoweredByContainer = {false}
        styles ={{
            textInput: styles.textInput,
            container:{
              position:'absolute',
              top: 70,
              left:10, 
              right:10,
            },
            listView:{
              position:'absolute',
              top: 60
            },
            separator:styles.separator
        }}
      query={{
        key: 'AIzaSyBgA8pR7mtv4ZvESDqthfKKQYWhKbuifY0',
        language: 'en',
      }} 
      renderRow = {(data) => <PlaceRow data = {data}/>} 
      />
      <View style = {styles.circle} />
      <View style = {styles.line} />
      <View style = {styles.square} />

      </View>

      </SafeAreaView>
    );
};

export default DestinationSearch;