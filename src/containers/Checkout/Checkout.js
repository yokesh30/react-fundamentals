import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from "./ContactData/ContactData"

class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.push(this.props.match.url + '/contact-data')
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search)
        let ingredients = {}
        let price = 0
        for (let params of searchParams.entries()) {
            if (params[0] !== 'price')
                ingredients[params[0]] = +params[1]
            else
                price = +params[1]
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                       render={(props) => <ContactData ingredients={this.state.ingredients}
                                                       totalPrice={this.state.totalPrice} {...props} />}/>
            </div>
        )
    }
}

export default Checkout
