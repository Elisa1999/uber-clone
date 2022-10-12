import React from "react";
import { View, Text, Image, FlatList} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBgA8pR7mtv4ZvESDqthfKKQYWhKbuifY0';

const RouteMap = (props) => {
    const origin = {
        latitude: 28.450627,
        longitude: -16.26300,
    };
    const destination = {
        latitude: 28.453127,
        longitude: -16.269033
    };

    return (
        <MapView
             style = {{height:'100%', width:'100%'}}
             provider = {PROVIDER_GOOGLE}
             showsUserLocation = {true}
             initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,}}>
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
                />
            <Marker 
            coordinate = {origin}
            title ={'Origin'}
            />
            <Marker
            coordinate={destination}
            title = {'Destination'}
            />
        
        </MapView>
        
        
    );
};

export default RouteMap;