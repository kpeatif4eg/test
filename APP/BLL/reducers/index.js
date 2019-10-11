
let initStore = {

    isLoad: false,

};

export default reducer = (state = initStore, action)=>{
    switch (action.type){
        case 'SET_THUMB_IMG_URL':
            return {...state, thumbImg: action.payload,isLoad:false};
        case 'START_THUMB_IMG_URL':
            return  {...state, isLoad:true};
        default:
            return state;
    }  
}