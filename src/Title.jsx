import PropTypes from 'prop-types';

const Title = ({ saludo, subtitle }) => {
	return (
		<>
			<h1>My First App</h1>
			<p>{saludo}</p>
			<p>{subtitle}</p>
			{/* <p>{JSON.stringify(saludo, null, 3)}</p> */}
		</>
	);
};

// Validación de los props
Title.propTypes = {
	saludo: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};

// Establecer valores por defecto de los props
Title.defaultProps = {
	subtitle: 'A lo developer',
};

export default Title;
