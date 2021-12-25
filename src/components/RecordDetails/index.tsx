import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from 'redux';
import { useParams, Params } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import * as services from '../../services';
import { IRecord, IState } from '../../commonTypes';
import './styles.scss';

const RecordDetails: React.FC = () => {
	const params: Params<string> = useParams()
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = 
		useDispatch();

	const selectedRecord: IRecord = useSelector(
		(state: IState) => state.selectedRecord
	)

	const isLoading: boolean = useSelector(
		(state: IState) => state.isLoading,
	)

	React.useEffect(() => {
		if(params.id) {
			dispatch(services.getRecordDetails(
				params.id
			))
		}
	}, [params.id, dispatch]);

	if(isLoading) {
		return (
			<div className="list-loading">
				Loading...
			</div>
		)
	}

	return (
		<div className="record-details">
			<div className="page-title">
				Record Details - {selectedRecord.title}
			</div>
			<div className="avatar-container">
				<img 
					src={selectedRecord.avatar} 
					alt="avatar" 
					className="avatar"
				/>
			</div>
			<div className="description-container">
				<div className="description-title">
					Description
				</div>
				<div className="description-text">
					{selectedRecord.description}
				</div>
			</div>
		</div>
	)
}

export default RecordDetails;
