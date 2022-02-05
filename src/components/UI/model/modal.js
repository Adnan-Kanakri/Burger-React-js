import React, { Fragment } from 'react'
import BackDrop from '../BackDrop/backDrop'
import styled from "./modal.module.css"

class Modal extends React.Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.show !== this.props.show || nextProps.children !== this.props.children) {
    //         return true
    //     }
    //     return false
    // }
    render() {
        return (
            <Fragment>
                <BackDrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={styled.Modal}
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal
