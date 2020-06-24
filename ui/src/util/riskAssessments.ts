export function mapRiskAssessmentToName(riskAssessment: RiskAssessmentType) {
	switch (riskAssessment) {
		case 'ATRIA':
			return 'ATRIA Bleeding Risk Score';
		case 'HEMORR':
			return 'HEMORR₂HAGES Score for Major Bleeding Risk';
		case 'HASBLED':
			return 'HAS-BLED Score for Major Bleeding Risk';
		case 'ORBIT':
			return 'ORBIT Bleeding Risk Score for Atrial Fibrillation';
		case 'DAPT':
			return 'Dual Antiplatelet Therapy (DAPT) Score';
		case 'CHADSVASc':
			return 'CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk';
		default:
			return 'Unknown Risk assessment';
	}
}
