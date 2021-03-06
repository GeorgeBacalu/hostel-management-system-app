import React, { createContext, useContext, useReducer } from "react";

//Prepares the Data Layer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export function StateProvider({ reducer, initialState, children }) {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
}

//Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);

//The data layer -> React Context API / Redux (sort of a global store)
