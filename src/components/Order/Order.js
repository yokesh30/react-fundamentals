import React from 'react';

const order = (props) => {
    const ingredients = []

    for (let ing in props.ingredients) {
        ingredients.push({
            name: ing,
            amount: props.ingredients[ing]
        })
    }

    const ingredient = ingredients.map(x => {
        return <div><span>{x.name + ' : '}</span>

            <span>{x.amount}</span></div>
    })

    return (

        <div>
            <p>Your ingredients: {ingredient}</p>
            <p>Your total price is: {props.price} </p>
        </div>

    )
}

export default order
