import React from 'react';
import { connect } from 'react-redux';

function PageContant(props) {
	const { isDarkMode } = props;
	const styles = {
		backgroundColor: isDarkMode ? 'black' : 'white',
		height: '100vh',
		width: '100vw'
	};
	return <div style={styles}>{props.children}</div>;
}

const mapStateToProps = (state) => {
	return { isDarkMode: state.isDarkMode.isDarkMode };
};

export default connect(mapStateToProps)(PageContant);
