import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
// @ts-ignore
import Image from '../assets/freshwebpack.png';

export const App = () => {

	const [count, setCount] = React.useState(0);

	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			React here
		<div>
			<img src={Image} alt="" />
			<Image />
		</div>
		<h1>{count}</h1>
		<button onClick={increment}>Нажми</button>	
		<Outlet />
		</div>
	)
};
