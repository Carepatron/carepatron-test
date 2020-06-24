import React from 'react';

import RiskAssessmentsList from './RiskAssessmentsList';

function Wrapper() {
	return (
		<RiskAssessmentsList
			isLoading={false}
			riskAssessments={['CHADSVASc', 'ATRIA', 'HEMORR', 'HASBLED', 'ORBIT', 'DAPT']}
			fetchRiskAssessments={() => {}}
		/>
	);
}

export default React.memo(Wrapper);
