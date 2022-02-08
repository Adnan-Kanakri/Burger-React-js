import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import RouteProps from '../../hoc/UseProps/RouteProps';
import { Route, Routes } from "react-router-dom"
import { connect } from "react-redux"

import ContactData from './Contact-Data/Contact-Data';

class CheckOut extends Component {

    componentWillMount() {
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredient = {};
        // let price = 0;
        // for (const param of query.entries()) {
        //     if (param[0] === "price") {
        //         price = param[1];
        //     } else {

        //         ingredient[param[0]] = +param[1];
        //     }
        // }
        // this.setState({ ingredient: ingredient, totalPrice: price });
    }

    checkOutCancelledHandler = () => {
        this.props.nav(-1);
    }

    checkOutContinuedHandler = () => {
        this.props.nav("contact-data", { replace: true });
    }

    render() {
       return (<div>
            <CheckOutSummary
                ingredients={this.props.ings}
                checkOutCancel={this.checkOutCancelledHandler}
                checkOutContinue={this.checkOutContinuedHandler}
            />
            <Routes>
                <Route path="Contact-data"
                    element={<ContactData
                    />} />
            </Routes>
        </div>)
    }
}
const mapStateToProps = (state) => ({
    ings: state.burger.ingredient,
    price: state.burger.totalPrice
});


export default connect(mapStateToProps)(RouteProps(CheckOut))