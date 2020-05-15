import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { editLanguage, themeToggle } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';

const content = {
	english: {
		search: 'Search',
		flag: '🇬🇧'
	},
	russian: {
		search: 'Поиск',
		flag: 'ru'
	},
	tatar: {
		search: 'Кайа',
		flag: 'tr'
	},
	svenska: {
		search: 'sök',
		flag: 'sw'
	}
};

function Navbar(props) {
	const { classes, language, isDarkMode, themeToggle } = props;
	const { search, flag } = content[language];
	return (
		<div className={classes.root}>
			<AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit">
						<span role="img" aria-labelledby="flag">
							{flag}
						</span>
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit">
						App Title
					</Typography>
					<Switch onChange={themeToggle} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${search}...`}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		language: state.language.language,
		isDarkMode: state.isDarkMode.isDarkMode
	};
};

export default connect(mapStateToProps, { editLanguage, themeToggle })(withStyles(styles)(Navbar));
