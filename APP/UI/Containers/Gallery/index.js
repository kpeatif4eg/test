import React from 'react';
import { connect } from 'react-redux';
import { changeSome } from '../../../BLL/actions';
import {
    View,
    Text,
    Button,
    Image,
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'

import GalleryItem from '../../Components/GalleryItem';
import ShowSpinner from '../../HOC';


class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            changedImage:null,
            isShowChangedImage:false
        }    
        props.LOAD();
    }

    render(){
        return(

              <View style={styles.base}>
                {
                    this.props.isLoad
                    ?
                    <ActivityIndicator  size="large" color="#0000ff" style={{width:'100%', height:'100%'}}/>
                    :
                    <ScrollView >
                        <View style={styles.wrapper}>
                        <GalleryItem 
                            imgArray={this.props.img}
                            chengeImage={this.changedImage}
                            route={(screen, image)=>{this.props.navigation.navigate(screen,image)}}
                        />
                        </View>
                    </ScrollView>
                }
              </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginBottom:40,
    },
    base:{
        backgroundColor:'#000000'
    }
})

function mapDispatchToProps(dispatch){
    return{
        LOAD:()=>dispatch(changeSome())
    }
}
export default connect(store =>(
                            {
                                img: store.thumbImg,
                                isLoad: store.isLoad,
                            }
                        ),
                        mapDispatchToProps)(Gallery);

