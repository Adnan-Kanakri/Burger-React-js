import React from 'react'
import Burger from '../../Burger/Burger'
import Button from './../../UI/Button/Button';
import styled from "./CheckOutSummary.module.css"

const CheckOutSummary = (props) => {
    // console.log(props)
    return (
        <div className={styled.CheckOutSummary}>
            <h1>We hope it tastes well </h1>
            <div style={{width:"100%"  , margin:"auto"}}>
                    <Burger ingredient={props.ingredients}/>
            </div>
            <Button btnType="Danger"
                    clicked={props.checkOutCancel}
            >CANCEL</Button>
            <Button btnType="Success"
                    clicked={props.checkOutContinue}
            >CONTINUE</Button>
        </div>
    )
}

export default CheckOutSummary
