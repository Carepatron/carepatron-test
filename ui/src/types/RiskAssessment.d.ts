interface IRiskAssessmentResult {
	id: string;
	riskAssessmentType: RiskAssessmentType;
	score: number;
}

type RiskAssessmentType = 'Invalid' | 'CHADSVASc' | 'ATRIA' | 'HEMORR' | 'HASBLED' | 'ORBIT' | 'DAPT';

interface IRiskAssessmentState {
	riskAssessments: RiskAssessmentType[];
	isLoading: boolean;
	hasMore: boolean;
}
