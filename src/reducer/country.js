
const initialState ={
    countryName:'in'
}
const country = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_COUNTRY':
            return{
                countryName:action.countryName
            }
        default : 
            return state
    }
}

export default country