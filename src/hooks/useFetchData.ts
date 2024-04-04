import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiResponse<T> {
	items: T[];
}

export interface Tag {
	name: string;
	count: number;
}

const useFetchData = <T>(
	pageNumber: string,
	pageSize: string,
	order: 'asc' | 'desc',
	sortBy: 'name' | 'popular'
): { data: T[] | null; loading: boolean; error: string | null } => {
	const [data, setData] = useState<T[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const apiUrl = `https://api.stackexchange.com/2.3/tags`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<ApiResponse<T>>(apiUrl, {
					params: {
						page: pageNumber,
						pagesize: pageSize,
						order: order,
						sort: sortBy,
						site: 'stackoverflow',
						filter: '!21k7qaosV)V8y5XPlOTbl',
					},
				});
				setData(response.data.items);
				setLoading(false);
			} catch (err: any) {
				const errorMessage = err.response.data.error_message;
				setError(errorMessage);
				setLoading(false);
			}
		};

		fetchData();
	}, [pageNumber, pageSize, order, sortBy, apiUrl]);

	return { data, loading, error };
};

export default useFetchData;
