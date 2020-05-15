import { EDIT_LANGUAGE } from '../actions/types';

const INITIAL_LANG = { language: 'english' };

export default (state = INITIAL_LANG, action) => {
	switch (action.type) {
		case EDIT_LANGUAGE:
			return { ...state, language: action.payload };
		default:
			return state;
	}
};
