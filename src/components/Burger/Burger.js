import React from 'react'
import style from "./Burger.module.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)       ///////object.keys   convert object to array
        .map((igKey) => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((preValue, currValue) => {
            return preValue.concat(currValue);
        }, [])      //////initialise array
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding Ingredients</p>
    }
    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
