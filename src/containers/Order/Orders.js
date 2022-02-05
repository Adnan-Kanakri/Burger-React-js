import axios from "../../axios-orders";
import React, { Component } from "react";
import Order from './../../components/Order/Order';
import WithErrorHandler from './../../WithErrorHandler/WithErrorHandler';



class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get("/order.json").then(response => {
            console.log(response.data);
            const fetchedOrders = [];
            for (const key in response.data) {
                fetchedOrders.push(
                    {
                        ...response.data[key],
                        id: key
                    }
                );
            }

            this.setState({
                orders: fetchedOrders,
                loading: false
            })
        }).catch(err => {
            this.setState({
                loading: false
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return (

                        <Order key={order.id}
                            ingredients={order.ingredient}
                            price={order.price}


                        />)
                })}
            </div>
        );
    } s
}

export default WithErrorHandler(Orders, axios);