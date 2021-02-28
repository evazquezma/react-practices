//const { Component } = require("react");
import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../Auxiliary/Auxiliary'


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1,
    cheese: 1.5,
    meat: 2
}


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {}
    // }

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredientes = { ...this.state.ingredients}
        updatedIngredientes[type] = updatedCount;
      
        const priceDifference = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + priceDifference;
       
        this.setState({
            ingredients: updatedIngredientes,
            totalPrice : updatedPrice
        });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredientes = { ...this.state.ingredients}
        updatedIngredientes[type] = updatedCount;
      
        const priceDifference = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice - priceDifference;
       
        this.setState({
            ingredients: updatedIngredientes,
            totalPrice : updatedPrice
        });
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;