import * as actionType from "../actions/actionsTypes";
const initialState = {
    orders: [],
    loading: false,
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PURCHAS_BURGER_START:
            return {
                ...state,
                loading: true,
            }
        case actionType.PURCHAS_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }

        case actionType.PURCHAS_BURGER_FAILED:
            return {
                ...state,
                loading: false,

            }
        default:
            return state;
    }
}


export default reducer;