import { GET_ITEMS, DEL_ITEM,  ADD_ITEM, ITEMS_LOAD } from '../actions/types';

const initState = {
    items: [],
    loading: false
}

export default function(state = initState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DEL_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOAD:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
