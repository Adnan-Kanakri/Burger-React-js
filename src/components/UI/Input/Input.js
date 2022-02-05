import React from 'react';
import styled from "./Input.module.css";

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [styled.inputElement];

    if (!props.valid && props.touched) {
        inputClasses.push(styled.Invalid);
    }


    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.configElement}
                onChange={props.change}
                value={props.value}
            />;
            break;
        case ("textarea"):
            inputElement = <textarea
                className={styled.inputElement}
                {...props.configElement}
                onChange={props.change}
                value={props.value}
            >
            </textarea>
            break;
        case ("select"):
            inputElement =
                <select
                    className={styled.inputElement}
                    onChange={props.change}
                    value={props.value}>
                    {
                        props.configElement.option.map(options => {
                            return <option
                                key={options.value}
                                value={options.value}
                            >
                                {options.displayValue}
                            </option>
                        })
                    }
                </select>
            break;

        default:
            inputElement = <input
                className={styled.inputElement}
                {...props.configElement}
                value={props.value}
                onChange={props.change}
            />
            break;
    }
    return (
        <div className={styled.input}>
            <label className={styled.label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
