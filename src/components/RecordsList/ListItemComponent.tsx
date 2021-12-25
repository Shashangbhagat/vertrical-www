import React from 'react';
import { IRecord } from '../../commonTypes';


interface IProps {
	record: IRecord,
	handleTitleClick: (id: string) => void,
}

const ListItemComponent: React.FC<IProps> = (props) => {
	const {record, handleTitleClick} = props;
	return (
		<div className="list-item">
			<div className="avatar-container">
				<img 
					src={record.avatar} 
					alt="avatar" 
					className="avatar"
				/>
			</div>
			<div className="details-contianer">
				<div 
					className="record-title"
					onClick={() => handleTitleClick(record._id)}	
				>
					{record.title}
				</div>
				<div className="record-short-descriptions">
					{record.shortDescription}
				</div>
			</div>
		</div>
	)
}

export default ListItemComponent;
