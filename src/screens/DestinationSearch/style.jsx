import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:20, 
        height:'100%',
        //marginVertical:10,
    },
    textInput: {
        padding:10,
        height:50,
        borderRadius: 5,
        backgroundColor:'#eee',
        marginVertical:5,
        marginLeft: 15,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:1,
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:1 ,
        borderRadius:50,
        marginRight:10,
        height:27,
        width:27,
        alignItems: 'center',
    },
    locationText:{


    },
    separator:{
        backgroundColor:'#efefef',
        height:1,
      },
    circle:{
        width:6,
        height:6,
        backgroundColor:'black',
        top:20,
        left:-10,
        borderRadius:5,

    },
    line:{
        width:2,
        height:50,
        backgroundColor:'#919191',
        top:22,
        left:-8,

    },
    square:{
        width:6,
        height:6,
        backgroundColor:'black',
        top:24,
        left:-10,
    },


});

export default styles;
