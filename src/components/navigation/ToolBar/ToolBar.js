import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import styled from './ToolBar.module.css'
const ToolBar = (props) => {
    return (
        <header className={styled.ToolBar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={styled.Logo}>
                <Logo />
            </div>
            <nav className={styled.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default ToolBar
