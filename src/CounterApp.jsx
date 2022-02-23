import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 1 }) => {
	// Destructuracion en un hook
	/**
	 * El useState retona un arreglo, con dos valores
	 * El valor que le pases y una funcion
	 */
	const [counter, setCounter] = useState(value);

	// HandleAdd (Funcion de evento)
	const handleAdd = e => {
		setCounter(counter + 1);
		// setCounter(counter => counter + 1);
	};

	const handleSubtract = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		value = 1;
		setCounter(value);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			<button className='button' onClick={handleAdd}>
				+1
			</button>
			<button className='button' onClick={handleSubtract}>
				-1
			</button>
			<button className='button' onClick={handleReset}>
				Reset
			</button>
		</>
	);
};

// Validación de los props
CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
