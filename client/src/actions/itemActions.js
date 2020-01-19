import { GET_ITEMS, DEL_ITEM,  ADD_ITEM, ITEMS_LOAD } from '../actions/types';

export const getItems = () => dispatch => {
    dispatch(loadItems());
    fetch("./api/items", { method: "GET" })
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_ITEMS,
            payload: data
        }))
        .catch(err => console.log(err));
}

export const addItems = item => dispatch => {
    fetch("/api/items", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(res => res.json())
        .then(data => dispatch({
            type: ADD_ITEM,
            payload: data
        }))
}

export const delItems = id => dispatch => {
    fetch(`/api/items/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => dispatch({
            type: DEL_ITEM,
            payload: id
        }))
}

export const loadItems = () => {
    return {
        type: ITEMS_LOAD
    }
}