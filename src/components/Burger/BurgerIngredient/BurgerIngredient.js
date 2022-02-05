import React, { Component } from "react";
import propTypes from "prop-types";
import style from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case "bread-bottom":
                ingredients = <div className={style.BreadBottom}></div>;
                break;
            case "bread-top":
                ingredients = (
                    <div className={style.BreadTop}>
                        <div className={style.Seeds1}></div>
                        <div className={style.Seeds2}></div>
                    </div>
                );
                break;
            case "meat":
                ingredients =
                    <div className={style.Meat}>

                    </div>;
                break;
            case "cheese":
                ingredients =
                    <div className={style.Cheese}>

                    </div>;
                break;
            case "salad":
                ingredients =
                    <div className={style.Salad}>

                    </div>;
                break;
            case "bacon":
                ingredients =
                    <div className={style.Bacon}>

                    </div>;
                break;
            default:
                ingredients = null;
                break;
        }
        return ingredients;
    }
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}


export default BurgerIngredient;
