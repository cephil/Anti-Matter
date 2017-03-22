import React from 'react';

import styles from './styles.less';

class Button extends React.Component {

	render () {
		const { size, color, inset, shadow } = this.props;
		const classNames = [ size, color, inset, shadow ].join(' ');

		return (
			<button className={classNames}>{this.props.text}</button>
		);
	}
}

export default Button;
