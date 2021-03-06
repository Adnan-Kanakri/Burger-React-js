// import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Modal from './../components/UI/model/modal';

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log(error)
                this.setState({ error: error });
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>

            )
        }
    }
}
export default WithErrorHandler
