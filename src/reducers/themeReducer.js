import { THEME_TOGGLE } from '../actions/types';

const INITIAL_THEME = { isDarkMode: false };

export default (state = INITIAL_THEME, action) => {
	switch (action.type) {
		case THEME_TOGGLE:
			return { ...state, isDarkMode: !state.isDarkMode };
		default:
			return state;
	}
};
