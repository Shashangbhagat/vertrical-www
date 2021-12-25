import { AnyAction } from 'redux';
import { IRecord } from '../commonTypes';
import * as constants from './constants';


export const setRecordsList = 
	(json: Array<IRecord>): AnyAction => {
		return {
			type: constants.SET_RECORDS_LIST,
			json,
		}
	}

export const setRecordsDetails =
	(json: IRecord): AnyAction => {
		return {
			type: constants.SET_RECORD_DETAILS,
			json,
		}
	}

export const setSearchTerm =
	(searchTerm: string): AnyAction => {
		return {
			type: constants.SET_SEARCH_TERM,
			searchTerm,
		}
	}

export const setLoading =
	(): AnyAction => {
		return {
			type: constants.SET_LOADING,
		}
	}
