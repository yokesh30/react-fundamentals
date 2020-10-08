import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/aux/Aux'
import Modal from '../../components/Burger/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

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
            ingredients: null,
            totalPrice: 5,
            purchasable: false,
            purchasing: false
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
        this.updatePurchasable(stateIngredients)
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
        this.updatePurchasable(stateIngredients)
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum, current) => {
            return sum + current
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchase = () => {
        this.setState({purchasing: false})
    }

    continuePurchase = () => {


        const queryParams = []
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push(encodeURIComponent('price') + '=' + encodeURIComponent(this.state.totalPrice))
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    componentDidMount() {
        axios.get('https://react-burger-4d8a6.firebaseio.com/ingredients.json')
            .then((response) => {
                console.log(response.data, 'dt')
                this.setState({ingredients: response.data})
            })
    }


    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let disabledInfoKey in disabledInfo) {
            disabledInfo[disabledInfoKey] = disabledInfo[disabledInfoKey] == 0
        }

        let burger = null
        let orderSummary = null

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls more={this.addIngredientHandler}
                                   less={this.lessIngredientHandler}
                                   disabled={disabledInfo}
                                   purchasable={this.state.purchasable}
                                   purchasing={this.purchaseHandler}
                                   price={this.state.totalPrice}/>
                </Aux>
            )
            orderSummary = (
                <OrderSummary ingredients={this.state.ingredients}
                              price={this.state.totalPrice}
                              cancel={this.cancelPurchase}
                              continue={this.continuePurchase}/>
            )
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} closed={this.cancelPurchase}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios)
