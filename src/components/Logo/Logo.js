import React from 'react'
import styled from "./Logo.module.css"
import BurgerLogo from  "../../assets/images/BurgerLogo.png"

const Logo = (props) => {
    return (
        <div className={styled.Logo}>
            <img src={BurgerLogo} alt="MyBurger" />
        </div>
    )
}

export default Logo
