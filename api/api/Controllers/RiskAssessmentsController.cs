using System;
using api.Contracts.Requests;
using api.Contracts.Response;
using core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("riskassessments")]
    public class RiskAssessmentsController : ControllerBase
    {
        private static readonly RiskAssessmentType[] staticRiskAssessments = new[] {
                    RiskAssessmentType.CHADSVASc,
                    RiskAssessmentType.ATRIA,
                    RiskAssessmentType.DAPT,
                    RiskAssessmentType.HASBLED,
                    RiskAssessmentType.HEMORR,
                    RiskAssessmentType.ORBIT };

        private readonly ILogger<RiskAssessmentsController> _logger;

        public RiskAssessmentsController(ILogger<RiskAssessmentsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Create(CreateRiskAssessment request)
        {
            var result = new RiskAssessmentResult(Guid.NewGuid(), request.RiskAssessmentType, 0);

            return Created($"riskassessments/{result.Id}", result);
        }

        [HttpGet]
        public PaginatedResult<RiskAssessmentType> GetAllRiskAssessments()
        {
            return new PaginatedResult<RiskAssessmentType>(staticRiskAssessments, new Pagination(staticRiskAssessments.Length, 0));
        }
    }
}
