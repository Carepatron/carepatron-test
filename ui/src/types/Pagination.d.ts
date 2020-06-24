interface IPaginatedResult<T> {
	items: T[];
	pagination: IPagination;
}

interface IPagination {
	limit: number;
	offset: number;
}
