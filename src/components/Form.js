import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { editLanguage } from '../actions';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';

const words = {
	english: {
		signIn: 'Sign In',
		email: 'Email',
		password: 'Password',
		remember: 'Remember Me'
	},
	russian: {
		signIn: 'Войти',
		email: 'Почта',
		password: 'Пароль',
		remember: 'Запомнить меня'
	},
	tatar: {
		signIn: 'Эйдә уҗ',
		email: 'Почта индә',
		password: 'Ниче бүла',
		remember: 'Эй индә'
	},
	svenska: {
		signIn: 'logga in',
		email: 'e-post',
		password: 'lösenord',
		remember: 'Kom ihåg mig'
	}
};

function Form(props) {
	const { classes, language, editLanguage } = props;
	const { email, password, signIn, remember } = words[language];
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{signIn}</Typography>
				<Select value={language} onChange={editLanguage}>
					<MenuItem value="english">English</MenuItem>
					<MenuItem value="russian">Russian</MenuItem>
					<MenuItem value="tatar">Tatar</MenuItem>
					<MenuItem value="svenska">Swedish</MenuItem>
				</Select>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">{email}</InputLabel>
						<Input id="email" name="email" autoFocus />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">{password}</InputLabel>
						<Input id="password" name="password" autoFocus />
					</FormControl>
					<FormControlLabel control={<Checkbox color="primary" />} label={remember} />
					<Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>
						{signIn}
					</Button>
				</form>
			</Paper>
		</main>
	);
}

const mapStateToProps = (state) => {
	return { language: state.language.language };
};

export default connect(mapStateToProps, { editLanguage })(withStyles(styles)(Form));
