import {
	IAction,
	IState,
} from '../commonTypes';

const initialState: IState = {
	searchTerm: '',
	records: [],
	selectedRecord: {},
	isLoading: false,
}

const reducer = (
	state: IState = initialState,
	action: IAction
): IState => {
	switch(action.type) {
		default:
			return state;
	}
}

export default reducer;
