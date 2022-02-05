import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
// import style from "./OrderSummary.module.css"
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
                        {this.props.ingredients[igKey]}
                    </li>
                )
            })

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Continue to Checkout</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchasCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary