import React from 'react'
import styled from "./Order.module.css"

const Order = (props) => {
    const ingredients = [];
    for (const key in props.ingredients) {
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        })
    }
    const map = ingredients.map(ig => {
        return (<span
            style={
                {
                    textTransform: "capitalize",
                    display: "inline-block",
                    margin: "0 8px",
                    border: "1px solid #ccc",
                    padding: "5px"
                }
            }
            key={ig.name}>

            {ig.name} ({ig.amount})</span>)
    })

    return (
        <div className={styled.Order}>
            <p>Ingredient:{map} </p>
            <p>Price <strong>{props.price}</strong></p>
        </div>
    )
}

export default Order
