import { reducer } from "./reducer";
import { useState } from "react";

export const useStore = (initialState) =>{
   const [state, setState] = useState(initialState);

   const dispatch = (action) =>{
    const newAction = reducer(state, action)
    setState(newAction);
   }

   return [state, dispatch];
}