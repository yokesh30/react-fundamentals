import React from 'react';
import Burger from '../Burger/Burger'
import Button from '../../components/Burger/UI/Button/Button'
import styles from './CheckoutSummary.module.css'

const checkoutSummary = (props) => (
    <div className={styles.CheckoutSummary}>
        <p>Checkout page</p>
        <div style={{width: '100%', height: '300px', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType='Success' clicked={props.checkoutContinued}>CONTINUE</Button>
        <Button btnType='Danger' clicked={props.checkoutCanceled}> CANCEL</Button>
    </div>
)

export default checkoutSummary