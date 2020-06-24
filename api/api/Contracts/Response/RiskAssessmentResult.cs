using System;
using core;

namespace api.Contracts.Response
{
    public class RiskAssessmentResult
    {
        public RiskAssessmentResult(Guid id, RiskAssessmentType riskAssessmentType, int score)
        {
            Id = id;
            RiskAssessmentType = riskAssessmentType;
            Score = score;
        }

        public Guid Id { get; }

        public RiskAssessmentType RiskAssessmentType { get; }

        public int Score { get; }
    }
}
