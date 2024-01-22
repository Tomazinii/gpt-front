
import React, {createContext, useReducer } from "react";


const initalState = {
    content: "",
    load: false,
  };



  export const ContextGPT = createContext(undefined);

  function reducer(stateGpt, actionGpt) {
    switch (actionGpt.type) {

      case "GPT_GENERATE":
          return { ...stateGpt,  content: actionGpt.payload.message};
      
      case "GPT_GENERATE_fail":
            return { ...stateGpt };

      case "load_active":
            return { ...stateGpt, load: true };
      case "load_false":
            return { ...stateGpt, load: false };
      default:
        return { ...stateGpt };
    }
  }




  export const GptProvider = ({ children }) => {
    const [stateGpt, dispatchGpt] = useReducer(reducer, initalState);
  
    return (
      <ContextGPT.Provider value={{stateGpt, dispatchGpt }}>
        {children}
      </ContextGPT.Provider>
    );
  };