import { createAsyncAction } from 'typesafe-actions';

export const fetchRiskAssessments = createAsyncAction(
	'FETCH_RISKASSESSMENTS',
	'FETCH_RISKASSESSMENTS_SUCCESS',
	'FETCH_RISKASSESSMENTS_FAILURE'
)<void, IPaginatedResult<IRiskAssessmentResult>, Error>();
