import * as actionType from "../actions/actionsTypes";
import axios from "../../axios-orders";
export const addIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionType.ADD_INGREDIENT
    }
}

export const removeIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionType.REMOVE_INGREDIENT
    }
}

export const setIngredient = (ingredient) => {
    return {
        type: actionType.SET_INGREDIENT,
        ingredient: ingredient
    }
}


export const fetchIngredientFailed = () => {
    return {
        type: actionType.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredient = () => {
    return dispatch => {
        axios.get("https://mybyrgerproject-default-rtdb.firebaseio.com/ingredients.json")
            .then((response) => {
                dispatch(setIngredient(response.data))
            }).catch(error => {
                dispatch(fetchIngredientFailed());
            })
    };
}