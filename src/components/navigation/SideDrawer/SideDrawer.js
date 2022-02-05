import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'
import styled from './SideDrawer.module.css'
import Auxiliary from '../../../hoc/Auxiliary';
import BackDrop from '../../UI/BackDrop/backDrop';

const SideDrawer = (props) => {
    let stylesClasses = [styled.SideDrawer , styled.Close]
    if (props.open) {
        stylesClasses = [styled.SideDrawer , styled.Open]
    }
   
   
    return (
        <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={stylesClasses.join(" ")}>
            <div className={styled.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxiliary>
        
    )
}

export default SideDrawer
