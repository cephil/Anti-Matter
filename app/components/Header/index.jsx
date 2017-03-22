import React from 'react';

import styles from './styles.less';

class Header extends React.Component {
	render () {
		return (
			<h1>{this.props.title}</h1>
		);
	}
}

export default Header;
