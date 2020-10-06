import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/aux/Aux'

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 2,
    cheese: 0.4,
    bacon: 1
}

class BurgerBuilder extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                meat: 0,
                cheese: 0,
                bacon: 0,
                salad: 0
            },
            totalPrice: 5
        }
    }

    addIngredientHandler = (type) => {
        let stateIngredients = {...this.state.ingredients}
        let totalPrice = this.state.totalPrice
        let count = this.state.ingredients[type]
        count++
        stateIngredients[type] = count
        totalPrice += INGREDIENT_PRICES[type]
        this.setState({ingredients: stateIngredients, totalPrice: totalPrice})

    }

    lessIngredientHandler = (type) => {
        let stateIngredients = {...this.state.ingredients}
        let totalPrice = this.state.totalPrice
        let count = this.state.ingredients[type]
        count = count > 0 ? count - 1 : 0
        if (count >= 0) {
            stateIngredients[type] = count
            totalPrice -= INGREDIENT_PRICES[type]
        }
        this.setState({ingredients: stateIngredients, totalPrice: totalPrice})

    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let disabledInfoKey in disabledInfo) {
            disabledInfo[disabledInfoKey] = disabledInfo[disabledInfoKey] == 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandler}
                               less={this.lessIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder
