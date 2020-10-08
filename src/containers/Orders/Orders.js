import React, {Component} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {

    state = {
        orders: []
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then((response) => {
                const fetchedOrders = []
                for (let key in response.data) {
                    fetchedOrders.push({...response.data[key], id: key})
                }
                console.log(fetchedOrders, 'gfgf')
                this.setState({orders: fetchedOrders})
            })
    }

    render() {

        let orders = []
        this.state.orders.map((ord) => {
            console.log(ord.ingredients, 'ord')
            orders.push(<Order ingredients={ord.ingredients} price={ord.price} key={Math.random()}/>)
        })

        return (
            <div className="orders">

                {orders}
            </div>
        )
    }
}

export default Orders