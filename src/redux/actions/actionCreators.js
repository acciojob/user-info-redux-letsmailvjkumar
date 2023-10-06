import {NAME, EMAIL} from './actionTypes'

export const name = (value)=>{
    return{
        type: NAME,
        payload: value,
    };
}
export const email = (value)=>{
    return{
        type: EMAIL,
        payload: value,
    };
}