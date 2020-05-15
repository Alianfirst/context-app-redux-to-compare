import { EDIT_LANGUAGE, THEME_TOGGLE } from './types';

export const editLanguage = (evt) => {
	return {
		type: EDIT_LANGUAGE,
		payload: evt.target.value
	};
};

export const themeToggle = () => {
	return {
		type: THEME_TOGGLE
	};
};
