const initialState={
    Firstname:'',
    Username:'',
    password:'',
    Confirmpassword:'',
    email:'',
    Mobnum:''
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,Firstname:action.payload.Firstname,
        Username:action.payload.Username,
        password:action.payload.password,
        Confirmpassword:action.payload.Confirmpassword,
        email:action.payload.email,
        Mobnum:action.payload.Mobnum
    }
    }
    default:
    return state;
    }
    
    }