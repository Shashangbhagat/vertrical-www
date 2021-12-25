import React from 'react';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';
import './styles.scss';

const RecordsList: React.FC = () => {
	return (
		<div className="records-list-page">
			<div className="page-title">
				Records List
			</div>
			<SearchComponent />
			<ListComponent />
		</div>
	)
}

export default RecordsList;
