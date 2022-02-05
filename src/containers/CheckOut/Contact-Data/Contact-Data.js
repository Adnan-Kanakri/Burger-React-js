import React, { Component } from 'react'
import Button from './../../../components/UI/Button/Button';
import styled from './Contact-Data.module.css'
import axios from "../../../axios-orders";
import Spinner from './../../../components/UI/Spinner/Spinner';
import RouteProps from './../../../hoc/UseProps/RouteProps';
import Input from '../../../components/UI/Input/Input';
import { connect } from "react-redux"
// import validation from "validator";
import {
    validName,
    validCountry,
    validEmail,
    validStreet,
    validZipCode
} from "../../../hoc/validation/validTools";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                configElement: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                value: "",
                validation: {
                    validName
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                configElement: {
                    type: 'text',
                    placeholder: 'Enter Your Street'
                },
                value: "",
                validation: {
                    validStreet
                },
                valid: false,
                touched: false

            },
            Country: {
                elementType: 'input',
                configElement: {
                    type: 'text',
                    placeholder: 'Enter Your Country'
                },
                value: "",
                validation: {
                    validCountry
                },
                valid: false,
                touched: false

            },
            zipCode: {
                elementType: 'input',
                configElement: {
                    type: 'text',
                    placeholder: 'Enter Your ZIP CODE'
                },
                value: "",
                validation: {
                    validZipCode
                },
                valid: false,
                touched: false

            },
            email: {
                elementType: 'input',
                configElement: {
                    type: 'email',
                    placeholder: 'Enter Your E-mail'
                },
                value: "",
                validation: {
                    validEmail
                },
                valid: false,
                touched: false

            },
            delivery: {
                elementType: 'select',
                configElement: {
                    option: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" }
                    ]
                },
                value: "",
                validation: {

                },
                valid: false,
                touched: false
            },
        },
        loading: false,
    }
    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (const key in this.state.orderForm) {
            if (!this.state.orderForm[key].valid) {
                console.log(key)
                return console.log("you have An valid value");
            }
            formData[key] = this.state.orderForm[key].value
        }
        this.setState({
            loading: true
        })
        const order = {
            ingredient: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        axios.post("/order.json", order).then(res => {
            this.setState({
                loading: false,
            })
            this.props.nav("/");
        }).catch(err => {
            this.setState({
                loading: false,
            })
        });
    }

    checkValidity = (value, rule) => {
        let isValid = false;
        if (rule.hasOwnProperty("validName")) {
            console.log("name");
            if (rule.validName(value)) {
                isValid = validName(value);
            }
        }
        if (rule.hasOwnProperty("validStreet")) {
            console.log("street");
            if (rule.validStreet(value)) {
                isValid = validStreet(value);
            }
        }
        if (rule.hasOwnProperty("validCountry")) {
            console.log("country");
            if (rule.validCountry(value)) {
                isValid = validCountry(value);
            }
        }
        if (rule.hasOwnProperty("validEmail")) {
            console.log("email");
            if (rule.validEmail(value)) {
                isValid = validEmail(value);
            }
        }
        if (rule.hasOwnProperty("validZipCode")) {
            console.log("zipCode");
            if (rule.validZipCode(value)) {
                isValid = validZipCode(value);
            }
        }
        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid =
            this.checkValidity(updatedFormElement.value,
                updatedFormElement.validation)
        updatedFormElement.touched = true
        console.log(updatedFormElement);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm });

    }

    render() {
        const FormElementArray = [];
        for (let key in this.state.orderForm) {
            FormElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (<form onSubmit={this.orderHandler}>

            {FormElementArray.map((formElement) => {
                return <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    configElement={formElement.config.configElement}
                    value={formElement.config.value}
                    valid={formElement.config.valid}
                    touched={formElement.config.touched}
                    change={(event) => this.inputChangeHandler(event, formElement.id)}
                />
            })}
            <Button btnType="Success">ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styled.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    ings: state.ingredient,
    price: state.totalPrice
});



export default connect(mapStateToProps)(RouteProps(ContactData))