import { GEt_USER_LIST_SUCCESS,GET_USER_LIST } from "../actionTypes";

const initUserState = {
    loading:false , 
    userList :[]
}

const usersReducer = (state=initUserState,action)=>{
    let {type,payload}= action ; 

    switch (type) {
        case GET_USER_LIST:
            return {...state,loading:true} 
        
        case GEt_USER_LIST_SUCCESS: 
        console.log("USER LIST",payload)
            return {...state, loading:false, userList:payload}
 
        default:
           return state ; 
    }
}

export default usersReducer ; 