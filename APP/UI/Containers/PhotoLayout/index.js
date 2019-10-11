import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';


export default function PhotoLayout(props){
    const [isLoad, setLoad] = useState(true);
    return(
        <TouchableHighlight>
            <>
                {props.spinner(isLoad) || null}

                <Image
                    style={{width:'100%', height:'100%'}}
                    source={{uri: props.navigation.getParam('img')}}
                    onLoad={()=>setLoad(false)}
                />
            </>
        </TouchableHighlight>
    )
};
