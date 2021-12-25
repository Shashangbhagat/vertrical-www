import { AnyAction } from 'redux';
import {
	IState,
} from '../commonTypes';
import * as constants from './constants';

const initialState: IState = {
	searchTerm: '',
	records: [],
	selectedRecord: {
		_id: '',
		title: '',
		shortDescription: '',
		description: '',
		avatar: '',
	},
	isLoading: false,
}

const reducer = (
	state: IState = initialState,
	action: AnyAction
): IState => {
	switch(action.type) {
		case constants.SET_SEARCH_TERM:
			return {
				...state,
				searchTerm: action.searchTerm,
			}
		case constants.SET_LOADING:
			return {
				...state,
				isLoading: true
			}
			case constants.SET_RECORDS_LIST:
				return {
					...state,
					isLoading: false,
					records: action.json,
				}
			case constants.SET_RECORD_DETAILS:
				return {
					...state,
					isLoading: false,
					selectedRecord: action.json,
				}
		default:
			return state;
	}
}

export default reducer;
