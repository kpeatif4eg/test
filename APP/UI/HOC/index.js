import React, {useState} from 'react';
import { Text,
        ActivityIndicator,        
} from 'react-native';

export default ShowSpinner = WrappedComponent =>{
    return function (props){
  
        
        props = {...props, 
                    spinner: (isLoad)=>( 
                        isLoad
                        ?
                        <ActivityIndicator
                            size="large"
                            color="#0000ff"
                        />
                        :
                        null
                    )
                };
       return( 
            <WrappedComponent {...props}/>
       )
    }
}