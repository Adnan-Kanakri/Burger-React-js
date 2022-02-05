import React from 'react'
import { Routes, Route } from "react-router-dom"
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'
import Orders from '../containers/Order/Orders';
// import ContactData from '../containers/CheckOut/Contact-Data/Contact-Data';
// import CheckOutSummary from './../components/Order/CheckOutSummary/CheckOutSummary';
import CheckOut from './../containers/CheckOut/CheckOut';

const RouteProject = () => {
    return (
    <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/checkout/*" element={<CheckOut />}>
        </Route>
    </Routes>
    )
}





export default RouteProject
