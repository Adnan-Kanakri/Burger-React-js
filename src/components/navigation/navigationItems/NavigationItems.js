import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styled from './NavigationItems.module.css'


const NavigationItems = (props) => {
  return (
    <ul className={styled.NavigationItems}>
      <NavigationItem link="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/Orders" >
        Orders
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
