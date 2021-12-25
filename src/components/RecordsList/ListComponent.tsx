import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { IRecord, IState } from '../../commonTypes';
import ListItemComponent from './ListItemComponent';

const ListComponent: React.FC = () => {
	const records: Array<IRecord> = useSelector(
		(state: IState) => state.records,
	)

	const isLoading: boolean = useSelector(
		(state: IState) => state.isLoading,
	)

	const navigate:NavigateFunction = useNavigate();

	const handleTitleClick = 
		(id: string): void => {
			navigate(`/${id}`);
		}

	if (isLoading) {
		return (
			<div className="list-loading">
				Loading...
			</div>
		)
	}

	return (
		<div className="list-component">
			<div className="list">
				{records.map((record: IRecord) => (
					<ListItemComponent 
						record={record} 
						handleTitleClick={handleTitleClick}
					/>
				))}
			</div>
		</div>
	)
}

export default ListComponent;