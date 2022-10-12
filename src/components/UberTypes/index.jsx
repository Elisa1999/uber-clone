import React from "react";
import {View, Text, Pressable} from "react-native";
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes= () =>{
    const confirm = () =>{
        console.warn('comfirm');
    };
    return (
        <View>
            {typesData.map( (type) => (<UberTypeRow type = {type} key = {type.id}/>))}
            <Pressable onPress ={confirm} style = {{
                width:'95%',
                backgroundColor:'black',
                padding:10,
                margin:10,
                alignItems:'center',
                alignSelf:'center',
            }}>
                <Text style = {{color:'white', fontWeight:'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;