import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';
import Button from './components/Buttons';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Grid from './components/Grid';

import styles from './main.less';
import palette from './styles/_palette.less';
import typography from './styles/_typography.less';

class App extends React.Component {
	render () {
		return (
			<div>
				<Header title="Buttons" />
				<Subheader title="Dimension Style - Sizes" />

					<div className="btn-std">
						<Button text="Small" size="small" color="primary" inset="inset" shadow="shadow" hover="basic" />
						<Button text="Normal" size="normal" color="secondary" inset="inset" shadow="shadow" hover="basic" />
						<Button text="Medium" size="medium" color="blueGray" inset="inset" shadow="shadow" hover="basic" />
						<Button text="Large" size="large" color="tertiary" inset="inset" shadow="shadow" hover="basic" />
						<Button text="XLarge" size="xlarge" color="red" inset="inset" shadow="shadow" hover="basic" />
					</div>

			</div>
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('app'), null);
