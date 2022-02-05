import React from 'react'
import styled from './NavigationItem.module.css'

import {NavLink} from "react-router-dom"



const NavigationItem = (props) => {
    return (
        <li className={styled.NavigationItem}>
            <NavLink to={props.link}
               className={styled.active}
            >{props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem
