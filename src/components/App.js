
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import {name, email} from '../redux/actions/actionCreators'

const App = () => {

  const dispatch = useDispatch();
  const nameValue = useSelector(state => state.name); // Access the 'name' value from the Redux store
  const emailValue = useSelector(state => state.email); // Access the 'email' value from the Redux store

  const handleNameChange = (event) => {
    dispatch(name(event.target.value)); // Dispatch the action to update the 'name' value in the store
  };

  const handleEmailChange = (event) => {
    dispatch(email(event.target.value)); // Dispatch the action to update the 'email' value in the store
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>User Information</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" value={nameValue} onChange={handleNameChange}/><br />
        <label htmlFor="email">Email: </label>
        <input type="email" value={emailValue} onChange={handleEmailChange}/>
        <div className="output">
        <p>Current values in store:</p>
        <p>Name - {nameValue}</p>
        <p>Email - {emailValue}</p>
        </div>
    </div>
  )
}

export default App
