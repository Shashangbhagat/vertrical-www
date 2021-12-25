import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as actions from './redux/actions';

const apiUrl = process.env.REACT_APP_API_URL;

export const getRecordsList = (searchTerm: string): ThunkAction<
	void,
	{},
	{},
	AnyAction
	> => {
		return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
			dispatch(actions.setLoading());
			axios.get(`${apiUrl}records`, {
				params: {
					searchTerm,
				}
			})
				.then((result: AxiosResponse) => {
					dispatch(actions.setRecordsList(result.data));
				}).catch(e => {
					console.log(e)
				})
		}
}

export const getRecordDetails = (id: string): ThunkAction<
void,
{},
{},
AnyAction
> => {
		return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
			dispatch(actions.setLoading());
			axios.get(`${apiUrl}/record/${id}`)
				.then((result: AxiosResponse) => {
					dispatch(actions.setRecordsDetails(result.data))
				}).catch(e => {
					console.log(e)
				})
		}
}
