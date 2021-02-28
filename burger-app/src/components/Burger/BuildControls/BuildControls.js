import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Ensalada', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Queso', type: 'cheese'},
    {label: 'Carne', type: 'meat'}
]

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Precio: <strong>{props.price.toFixed(2)} €</strong></p>
            {controls.map(control => (
                <BuildControl key={control.label} 
                    ingredientLabel={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabledRemove={props.disabled[control.type]}/>
                ) 
            )}
           
        </div>
    );
}

export default buildControls;