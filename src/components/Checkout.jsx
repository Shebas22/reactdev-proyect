import { Text } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";
// import { getDataBase } from "../../db/firebase-config";
// import { CartEmpty } from "../CartEmpty/CartEmpty";
import Spinner from "./Spinner";
import { db } from "../../db/firebase-config";
// import { Loading } from "../Loading/Loading";
// import "./checkout.css";

export const Checkout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [id, setId] = useState("");
	const [showId, setShowId] = useState(false);
	const [loading, setLoading] = useState(true);

	const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
	// const db = getDataBase();

	const checkoutForm = (e) => {
        debugger
		e.preventDefault();
		setShowId(true);
		let order = {
			buyer: {
				name,
				phone,
				email,
			},
			// items: cart,
			items: carrito.map((item) => ({
				id: item.id,
				price: item.precio,
				title: item.nombre,
			})),
			total: totalCarrito(),
			date: new Date().toISOString().replace("T", " | "),
		};
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order)
			.then(({ id }) => setId(id))
			.finally(() => {
				vaciarCarrito();
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	};

	return (
		<div className='checkout--container'>
			{showId ? (
				<>
					{loading && <Spinner />}
					{!loading && (
						<div className='checkout--msg'>
							Su compra fue registrada exitosamente con el
							identificador 👉
							<span className='checkout--msg--id'>{id}</span>
						</div>
					)}
				</>
			) : carrito.length === 0 ? (
				<Text>Carrito Vacio</Text>
			) : (
				<form onSubmit={checkoutForm} className='checkout--form'>
					<label className='checkout--form--label'>
						Nombre
						<input
							name='name'
							type='text'
							value={name}
							placeholder='nombre'
							onChange={(e) => setName(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<label className='checkout--form--label'>
						Telefono
						<input
							name='phone'
							type='text'
							value={phone}
							placeholder='phone'
							onChange={(e) => setPhone(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<label className='checkout--form--label'>
						Email
						<input
							name='email'
							type='email'
							value={email}
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
							className='checkout--form--input'
						/>
					</label>
					<button
						className='checkout--form--button'
						type='submit'
						disabled={name === "" || email === "" || phone === ""}>
						Comprar
					</button>
				</form>
			)}
		</div>
	);
};