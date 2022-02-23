import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
	// Destructuracion en un hook
	/**
	 * El useState retona un arreglo, con dos valores
	 * El valor que le pases y una funcion
	 */
	const [counter, setCounter] = useState(0);

	// HandleAdd (Funcion de evento)
	const handleAdd = e => {
		setCounter(counter + 1);
		// setCounter(counter => counter + 1);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>

			<button className='button' onClick={handleAdd}>
				Presioname :V
			</button>
		</>
	);
};

// Validación de los props
CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
