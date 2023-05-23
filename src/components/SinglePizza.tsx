import React, { useState } from 'react';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import Pizza from '../models/Pizza';
import { EditPizzaForm } from './EditPizzaForm';

interface SinglePizzaProps {
	pizza: Pizza;
	changePizzaDetails: (pizzaEdited: Pizza) => void;
	removePizza: (id: number) => void;
}

export const SinglePizza: React.FC<SinglePizzaProps> = ({
	pizza,
	changePizzaDetails,
	removePizza,
}) => {
	const [edit, setEdit] = useState<boolean>(false);

	const handleToggleEdit = () => setEdit(!edit);

	const handleRemovePizza = () => removePizza(pizza.id);

	return (
		<div className='pizza'>
			<img src={`/images/${pizza.img}`} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<span>{pizza.price} ₴</span>

			<div className='pizza-controls'>
				<AiFillEdit onClick={handleToggleEdit} />
				<AiFillDelete onClick={handleRemovePizza} />
			</div>

			{edit && (
				<EditPizzaForm
					data={pizza}
					handleToggleEdit={handleToggleEdit}
					changePizzaDetails={changePizzaDetails}
				/>
			)}
		</div>
	);
};
