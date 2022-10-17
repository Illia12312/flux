import { DELETE_ITEM, FETCH, SAVE_ITEM } from "./constants";

export const reducer = (state, action) =>{
    switch (action.type){
        case DELETE_ITEM:
            return{
                ...state,
                data: state.data.setData((data) => data.filter((item) => item.id !== action.payload.id))
        }
        case SAVE_ITEM:
            return{
                ...state,
                data: state.data.map((item) => (item.id === action.payload.id ? { ...item, name: action.payload.name } : item))
        }
        case FETCH:
            return{
                ...state,
                data: action.payload.data
        }
    }
}