import ReactDOM from 'react-dom';
import Title from './Title';
import CounterApp from './CounterApp';
import './index.css';

const container = document.getElementById('root');

ReactDOM.render(
	<>
		<Title saludo='Jesus el capo' />
		<CounterApp value={1}></CounterApp>
	</>,
	container
);
