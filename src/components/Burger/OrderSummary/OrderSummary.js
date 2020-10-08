import React, {Component} from 'react';
import Aux from '../../../hoc/aux/Aux'
import Button from '../UI/Button/Button'

class OrderSummary extends Component {
    render() {
        let ingredients = Object.keys(this.props.ingredients).map(items => {
            return (<li key={items}>
                <span style={{textTransform: 'capitalize'}}>{items}</span>: {this.props.ingredients[items]}
            </li>)
        })

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    {ingredients}
                </ul>
                <p>Your total price is: {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        )
    }
}


export default OrderSummary
