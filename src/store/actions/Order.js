import * as actionType from "../actions/actionsTypes";
import axios from "../../axios-orders";

export const purchasBurgerSuccess = (id, orderData) => {
    return {
        type: actionType.PURCHAS_BURGER_SUCCESS,
        id: id,
        orderData: orderData
    }
}

export const purchasBurgerFailed = (error) => {
    return {
        type: actionType.PURCHAS_BURGER_FAILED,
        error: error,
    }
}

export const purchasBurgerStart = () => {
    return {
        type:actionType.PURCHAS_BURGER_START,
    }
}


export const purchasBurger = (orderData) => {
    return dispatch => {
        dispatch(purchasBurgerStart());
        axios.post("/order.json", orderData).then(res => {
            dispatch(purchasBurgerSuccess(res.data, orderData));
        }).catch(err => {
            dispatch(purchasBurgerFailed(err.message));
        });
    };
}



