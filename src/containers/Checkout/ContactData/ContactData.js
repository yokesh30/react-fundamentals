import React, {Component} from 'react';
import Button from '../../../components/Burger/UI/Button/Button'
import styles from './ContactData.module.css'
import axios from '../../../axios-orders'

class ContactData extends Component {
    state = {
        name: '',
        address: '',
        email: ''
    }

    orderHandler = (event) => {
        console.log(this.props, 'prp')
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Yokesh',
                email: 'abc@test.com'
            }
        }
        axios.post('/orders.json', order)
            .then((response) => {
                console.log(response)
                this.setState({purchasing: false})
                this.props.history.push('/orders')
            })
            .catch((error) => {
                console.log(error)
                this.setState({purchasing: false})
                //     })
            })

    }

    render() {
        return (
            <div className={styles.ContactData}>
                <h3> Enter your contact data</h3>
                <input type="text" name="name" id="name" placeholder="Your name"/>
                <input type="text" name="address" id="address" placeholder="Your address"/>
                <input type="text" name="email" id="email" placeholder="Your email"/>

                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </div>
        )
    }
}

export default ContactData
