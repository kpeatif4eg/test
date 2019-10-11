import React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    ActivityIndicator,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';


export default function GalleryItem(props){
    return(
        props.imgArray
        ?
        props.imgArray.map(item=>(
            <View style={styles.container}
                    key={item.id}
                    
            >
            <TouchableHighlight 
              onPress={()=>props.route('Photo',{img: item.urls.full})}
            >
                <ImageBackground 
                  style={styles.image_container}
                  source={{uri: item.urls.regular}}
                >
                <Text
                    style={
                            !item.description 
                            ? 
                            styles.description
                            : 
                            item.description.length<20
                            ?
                            styles.description
                            :
                            styles.description_small
                        }
                    >
                    {item.description || 'Unnamed photo'}
                </Text>

                <Text
                style={styles.name}>
                    <Text style={{fontSize:13}}>by </Text>
                    {item.user? item.user.name: 'null'}
                </Text>

                </ImageBackground>
            </TouchableHighlight>
            </View>
        ))
        :
        <ActivityIndicator size={"large"} color={'red'} />
    );


}
const styles = StyleSheet.create({
    description: {
  
        fontSize:20,
        color:'#ffffff',
        backgroundColor:'rgba(0,0,0,.3)',
        width:'100%',
        zIndex:100
    },
    name:{
        textAlign: 'center',
        fontSize:20,
        color:'#ffffff',
        backgroundColor:'rgba(0,0,0,.2)',
        width:'100%',
        zIndex:100,
    },
    container:{
        position:'relative',
        marginTop:25,
        width:'45%',
        height:210
    },
    image_container:{
        justifyContent:'space-between',
        width:'100%',
        height:200
    },
    description_small:{
        color:'#ffffff',
        backgroundColor:'rgba(0,0,0,.3)',
        width:'100%',
        zIndex:100,
        fontSize:14,
    }

})

//POSITION
// const styles = StyleSheet.create({
//     description: {
  
//         fontSize:20,
//         color:'#ffffff',
//         backgroundColor:'rgba(0,0,0,.3)',
//         width:'100%',
//         position:'absolute',
//         top: 0,
//         zIndex:100
//     },
//     name:{
//         position:'absolute',
//         bottom:10,
//         textAlign: 'center',
//         fontSize:20,
//         color:'#ffffff',
//         backgroundColor:'rgba(0,0,0,.2)',
//         width:'100%',
//         zIndex:100,
//         alignSelf:'flex-end'
//     },
//     container:{
//         position:'relative',
//         marginTop:25,
//         width:'45%',
//         height:210
//     },
//     description_small:{
//         color:'#ffffff',
//         backgroundColor:'rgba(0,0,0,.3)',
//         width:'100%',
//         zIndex:100,
//         position:'absolute',
//         top:0,
//         fontSize:14,
//     }

// })


// <Text
// style={
//         !item.description 
//         ? 
//         styles.description
//         : 
//         item.description.length<20
//         ?
//         styles.description
//         :
//         styles.description_small
//     }
// >