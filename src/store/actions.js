import { DELETE_ITEM, FETCH, SAVE_ITEM } from "./constants";

export const deleteAction = (id) => ({
    type:DELETE_ITEM,
    payload:{
        id,
    } 

})

export const saveAction = (id, name) =>({
    type:SAVE_ITEM,
    payload:{
        id,
        name,
    } 
})

export const fetchAction = (data) =>({
    type:FETCH,
    payload:{
        data,
    } 
})