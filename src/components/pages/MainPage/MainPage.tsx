import React from 'react';
import useFetchData, { Tag } from '../../../hooks/useFetchData';
import { useAppSelector } from '../../../hooks/storeHooks';
import { MainPageTemplate } from '../../templates/MainPageTepmplate/MainPageTemplate';
import { LoadingElement } from '../../organisms/LoadingElement/LoadingElement';
import { ErrorElement } from '../../organisms/ErrorElement/ErrorElement';

export const MainPage: React.FC = () => {
	const urlParams = useAppSelector((state) => state.URLparams);

	const {
		data: tags,
		loading,
		error,
	} = useFetchData<Tag>(
		urlParams.pageNumber.toString(),
		urlParams.pageSize.toString(),
		urlParams.order,
		urlParams.sortBy
	);

	if (loading) {
		return <LoadingElement />;
	}

	if (error) {
		return <ErrorElement errorMsg={error} />;
	}

	return <>{<MainPageTemplate data={tags} />}</>;
};
