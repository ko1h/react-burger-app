import React from 'react';

import classes from './Burger.css';
import BurgerIngedient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return  [...Array(props.ingredients[igKey])].map((_, i) =>{
        <BurgerIngedient key={igKey + i} type={igKey} />
      });
    });
  return(
    <div className={classes.Burger}>
      <BurgerIngedient type="bread-top" />
      <BurgerIngedient type="cheese" />
      <BurgerIngedient type="meat" />
      <BurgerIngedient type="bread-bottom" />
    </div>
  );
};

export default burger;