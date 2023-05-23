import React, { useState } from 'react';
import './App.css';

import { AddPizzaForm } from './components/AddPizzaForm';
import { DisplayPizzas } from './components/DisplayPizzas';

import Pizza from './models/Pizza';
import demoPizzas from './demoPizzas';

const App: React.FC = () => {
	const [pizzas, setPizzas] = useState<Pizza[]>(demoPizzas);

	const addPizza = (newPizza: Pizza) => {
		setPizzas([...pizzas, newPizza]);
	};

	const changePizzaDetails = (pizzaEdited: Pizza) => {
		setPizzas(
			pizzas.map(pizza => (pizza.id === pizzaEdited.id ? pizzaEdited : pizza))
		);
	};

	const removePizza = (id: number) => {
		setPizzas(pizzas.filter(pizza => pizza.id !== id));
	};

	return (
		<div className='App'>
			<div className='wrap'>
				<span className='heading'>Наша піцерія</span>
				<AddPizzaForm addPizza={addPizza} />
				<DisplayPizzas
					pizzas={pizzas}
					changePizzaDetails={changePizzaDetails}
					removePizza={removePizza}
				/>
			</div>
		</div>
	);
};

export default App;
