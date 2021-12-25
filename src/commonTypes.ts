export interface IRecord {
  _id: string,
	title: string,
	avatar?: string,
	description?: string,
	shortDescription: string,
}


export interface IState {
	searchTerm: string,
	records: Array<IRecord>,
	selectedRecord: IRecord,
	isLoading: boolean,
}
