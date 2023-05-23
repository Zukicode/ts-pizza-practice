import React from 'react';

import { SinglePizza } from './SinglePizza';

import Pizza from '../models/Pizza';
interface DisplayPizzasProps {
	pizzas: Pizza[];
	changePizzaDetails: (pizzaEdited: Pizza) => void;
	removePizza: (id: number) => void;
}

export const DisplayPizzas: React.FC<DisplayPizzasProps> = ({
	pizzas,
	changePizzaDetails,
	removePizza,
}) => {
	return (
		<div className='container'>
			{pizzas.map(pizza => {
				return (
					<SinglePizza
						key={pizza.id}
						changePizzaDetails={changePizzaDetails}
						removePizza={removePizza}
						pizza={pizza}
					/>
				);
			})}
		</div>
	);
};
