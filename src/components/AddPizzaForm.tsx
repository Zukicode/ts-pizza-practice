import React, { useState } from 'react';
import './styles.css';

import Pizza from '../models/Pizza';

type newPizzaType = {
	title: string;
	price: string;
	img: string;
};

interface AddPizzaFormProps {
	addPizza: (newPizza: Pizza) => void;
}

const initState = {
	title: '',
	price: '',
	img: '',
};

export const AddPizzaForm: React.FC<AddPizzaFormProps> = ({ addPizza }) => {
	const [newPizza, setNewPizza] = useState<newPizzaType>(initState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPizza({ ...newPizza, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { title, price, img } = newPizza;

		if (title && price && img) {
			addPizza({
				title: title,
				price: Number(price),
				img: img,
				id: Date.now(),
			});

			setNewPizza(initState);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Назва'
				onChange={handleChange}
				value={newPizza.title}
			/>
			<input
				type='text'
				name='price'
				placeholder='Ціна'
				onChange={handleChange}
				value={newPizza.price}
			/>
			<input
				type='text'
				name='img'
				placeholder='Картинка'
				onChange={handleChange}
				value={newPizza.img}
			/>
			<button type='submit'>+ Добавити в меню</button>
		</form>
	);
};
