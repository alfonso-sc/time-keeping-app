export interface ITimeEntry {
	id: number
	date: Date
	hoursWorked: number
	userId: number
	projectId: number
	description: string
}

export class TimeEntry implements ITimeEntry {

	constructor(
		public id: number,
		public date: Date,
		public hoursWorked: number,
		public userId: number,
		public projectId: number,
		public description: string,
	) { }
}
