import { createSlice } from "@reduxjs/toolkit";

const RegisterSlice=createSlice({
    name:'register',
    initialState:{
        fetchedData : [],
        authRegister: [],
        auth: false
    },
    reducers:{
        updateRegister(values, action){
            const newItem = action.payload;
       
            values.authRegister.push({
                id: newItem.id,
                Name: newItem.Name,
                Mobile: newItem.Mobile,
                Email: newItem.Email,
                Password: newItem.Password
            })
        },
        updateAuth(values){
           
            values.auth = true;
            
        },
        fetchedUpdate(values, action){
           values.fetchedData =[...action.payload]
        }

        
    }

})

export const RegisterAction = RegisterSlice.actions;

export default RegisterSlice;