import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import style from "./BuildControls.module.css"

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" }
]


const BuildControls = props => {
    return (
        <div className={style.BuildControl} >
            <p>Current Price :<strong>{props.price.toFixed(2)}</strong> </p>
            {
                controls.map(element => {
                    return <BuildControl
                        key={element.label}
                        label={element.label}
                        added={() => props.ingredientAdded(element.type)}
                        removed={()=>props.ingredientRemoved(element.type)}
                        disabled={props.disabled[element.type]}
                    />
                })
            }
            <button 
            className={style.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}


export default BuildControls
