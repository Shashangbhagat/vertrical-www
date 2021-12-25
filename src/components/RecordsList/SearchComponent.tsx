import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as services from '../../services';
import * as actions from '../../redux/actions';
import { IState } from '../../commonTypes';

const SearchComponent: React.FC = () => {
  const searchTerm: string = useSelector(
		(state: IState) => state.searchTerm
	)

	const [search, setSearch] = React.useState<string>(searchTerm)
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = 
		useDispatch();

	const handleInputChange = 
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setSearch(e.target.value);
		}

	const onSubmitSearch = (searchStr: string): void => {
		dispatch(actions.setSearchTerm(searchStr));
		dispatch(services.getRecordsList(searchStr))
	}

	const handleSearchClick = (): void => {
		onSubmitSearch(search);
	}

	return (
		<div className="search-component">
			<div className="input-container">
				<input
					type="text" 
					value={search}
					onChange={handleInputChange}
					className="search-input" 
					onKeyPress={(e: React.KeyboardEvent): void => {
						if (e.key === 'Enter') {
							handleSearchClick()
						}
					}}
				/>
			</div>
			<div className="btn-container">
				<button
					className="btn"
					onClick={handleSearchClick}
				>
					Search
				</button>
			</div>
		</div>
	)
}

export default SearchComponent;