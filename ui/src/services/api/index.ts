import apiClient from './apiClient';

const fetchRiskAssessments = (): Promise<
	IPaginatedResult<IRiskAssessmentResult>
> => {
	return apiClient.get<IPaginatedResult<IRiskAssessmentResult>>(
		'risksssessments'
	);
};

export default {
	fetchRiskAssessments,
};
