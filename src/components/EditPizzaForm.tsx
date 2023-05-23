import React, { useState } from 'react';
import Pizza from '../models/Pizza';

interface EditPizzaFormProps {
	data: Pizza;
	changePizzaDetails: (pizzaEdited: Pizza) => void;
	handleToggleEdit: () => void;
}

export const EditPizzaForm: React.FC<EditPizzaFormProps> = ({
	data,
	changePizzaDetails,
	handleToggleEdit,
}) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditPizza({ ...editPizza, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { title, price, img } = editPizza;

		if (title && price && img) {
			changePizzaDetails(editPizza);
			handleToggleEdit();
		}
	};

	console.log('edit: ', editPizza);

	return (
		<form className='edit-form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Назва'
				onChange={handleChange}
				value={editPizza.title}
			/>
			<input
				type='text'
				name='price'
				placeholder='Ціна'
				onChange={handleChange}
				value={editPizza.price}
			/>
			<input
				type='text'
				name='img'
				placeholder='Картинка'
				onChange={handleChange}
				value={editPizza.img}
			/>
			<button type='submit'>Зберегти</button>
		</form>
	);
};
