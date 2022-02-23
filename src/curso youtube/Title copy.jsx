const Title = props => {
	console.log(props);
	return (
		<>
			<h1
				className={props.className}
				style={props.styles}
				onClick={() => alert('hola')}>
				{props.title}
			</h1>
		</>
	);
};

export default Title;
