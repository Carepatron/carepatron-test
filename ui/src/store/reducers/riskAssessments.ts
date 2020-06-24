import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions';
import * as callActions from '../actions/riskAssessments';

export const defaultState: IRiskAssessmentState = {
	riskAssessments: [],
	isLoading: false,
	hasMore: false,
};

export const riskAssessments = (
	state = defaultState.riskAssessments,
	action: actions.RiskAssessmentsAction
): RiskAssessmentType[] => {
	switch (action.type) {
		case getType(callActions.fetchRiskAssessments.success):
			return action.payload.items.map((result) => result.riskAssessmentType);
	}

	return state;
};

export const isLoading = (state = defaultState.isLoading, action: actions.RiskAssessmentsAction): boolean => {
	return state;
};

export const hasMore = (state = defaultState.hasMore, action: actions.RiskAssessmentsAction): boolean => {
	return state;
};

const riskAssessmentsReducer = combineReducers<IRiskAssessmentState>({
	riskAssessments,
	isLoading,
	hasMore,
});

export default riskAssessmentsReducer;
