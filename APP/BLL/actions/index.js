export const changeSome = () =>{
    console.log('changesome')
    return (dispatch, getState)=>{
        dispatch({type: 'START_THUMB_IMG_URL'});
        fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
        {
            headers: {'Accept-Version': 'v1',
                        Authorization: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
                    },
            method: 'get'
        })
        .then(response=>{
              return response.json();
        })
        .then(resp=>{
            dispatch({type:'SET_THUMB_IMG_URL', payload:resp})
        })
        .catch(err=>{
            dispatch({type:'SET_THUMB_IMG_URL', payload:'https://tr.rbxcdn.com/deaf52d5e0eb6ed9d2cdf3b0f444df2c/420/420/Face/Png'})
            // console.log(err)
        })
    }   
}
// export const xxx = ()
    // type: 'SET_THUMB_IMG_URL', payload:item
