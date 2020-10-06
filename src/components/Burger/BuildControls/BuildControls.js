import React from "react";
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'

const controls = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'}
]

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(items => (
            <BuildControl key={items.label} label={items.label}
                          more={() => props.more(items.type)}
                          less={() => props.less(items.type)}
                          disabled={props.disabled[items.type]}></BuildControl>
        ))}
    </div>
)

export default buildControls