import React from 'react'
import styled from "./backDrop.module.css"

const backDrop = (props) => {
    return props.show ? <div className={styled.BackDrop} onClick={props.clicked}></div> : null
}
export default backDrop
