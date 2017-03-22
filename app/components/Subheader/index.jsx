import React from 'react';

import styles from './styles.less';

class Subheader extends React.Component {
	render () {

		console.log(this);
		return (
			<h2>{this.props.title}</h2>
		);
	}
}

export default Subheader;
