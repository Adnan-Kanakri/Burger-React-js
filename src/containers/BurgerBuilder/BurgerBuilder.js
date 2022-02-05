import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import * as actionType from "../../store/actions";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/orderSummary/OrderSummary";
import Modal from "../../components/UI/model/modal";
// import Aux from "../../hoc/auxiliary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from './../../WithErrorHandler/WithErrorHandler';

import hoc from "../../hoc/UseProps/RouteProps"

// import {useMatch , useParams, } from "react-router-dom"




class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
    };


    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props)
        // axios.get("https://mybyrgerproject-default-rtdb.firebaseio.com/ingredients.json")
        //     .then((res) => {
        //         this.setState({ ingredient: res.data })
        //     })
    }

    updatePurchasableState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((preValue, currentValue) => {
                return preValue + currentValue
            }, 0);
        return sum > 0;
    }

    // addIngredientHandler(type) {
    //     const oldCont = this.state.ingredient[type];
    //     const updateCounted = oldCont + 1
    //     const updatedIngredient = {
    //         ...this.state.ingredient
    //     }
    //     updatedIngredient[type] = updateCounted
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const updatePrice = priceAddition + oldPrice;
    //     this.setState({
    //         totalPrice: updatePrice,
    //         ingredient: updatedIngredient
    //     })
    //     this.updatePurchasableState(updatedIngredient);
    // }

    // removeIngredientHandler(type) {
    //     const oldCont = this.state.ingredient[type];
    //     if (oldCont <= 0) {
    //         return;
    //     }
    //     const updateCounted = oldCont - 1
    //     console.log(this.state.totalPrice);
    //     const updatedIngredient = {
    //         ...this.state.ingredient
    //     }
    //     updatedIngredient[type] = updateCounted
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const updatePrice = oldPrice - priceDeduction;
    //     this.setState({
    //         totalPrice: updatePrice,
    //         ingredient: updatedIngredient
    //     })
    //     this.updatePurchasableState(updatedIngredient);
    // }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchasCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchasContinueHandler = () => {


        // alert("You Continue...")
        // this.setState({
        //     loading: true
        // })
        // const order = {
        //     ingredient: this.state.ingredient,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "adnan Kanakri",
        //         address: {
        //             city: "damascus"
        //         },
        //         email: "adnan.kanakri@gmail.com"
        //     },
        //     delivery: "fastest"
        // }
        // axios.post("/order.json", order).then(res => {
        //     this.setState({
        //         loading: false,
        //         purchasing: false
        //     })
        // }).catch(err => {
        //     this.setState({
        //         loading: false,
        //         purchasing: false
        //     })
        // });
        // const queryParams = [];
        // for (const i in this.props.ings) {
        //     queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredient[i]))
        // }
        // queryParams.push("price=" + this.props.price);
        this.props.nav("/checkout")
    }

    render() {
        // console.log(this.state.ingredient["salad"])
        const disableInfo = {
            ...this.props.ings
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null
        let burger = <Spinner />
        if (this.props.ings) {
            burger = (
                <Fragment>
                    <Burger ingredient={this.props.ings} test="HEllo" />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdd}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disableInfo}
                        purchasable={this.updatePurchasableState(this.props.ings)}
                        price={this.props.price}
                        ordered={this.purchasingHandler}
                    />
                </Fragment>
            );
            orderSummary = <OrderSummary ingredients={this.props.ings}
                purchasCancelled={this.purchasCancelHandler}
                purchasContinued={this.purchasContinueHandler}
                price={this.props.price}
            />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchasCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ings: state.ingredient,
    price: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
    onIngredientAdd: (ing) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ing }),
    onIngredientRemove: (ing) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ing })
});




export default connect(mapStateToProps, mapDispatchToProps)(hoc(withErrorHandler(BurgerBuilder, axios)));
