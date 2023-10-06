import {NAME, EMAIL} from '../actions/actionTypes'

const initialState = {
    name: '', // Initial name value
    email: '', // Initial email value
  };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case NAME:
        return {
          ...state,
          name: action.payload, // Update the 'name' property with the new value
        };
      case EMAIL:
        return {
          ...state,
          email: action.payload, // Update the 'email' property with the new value
        };
      default:
        return state;
    }
  };
export default userReducer