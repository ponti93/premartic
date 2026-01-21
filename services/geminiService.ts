
import {
  saveAngleMinerResult,
  saveTestLabResult,
  saveConversionDoctorResult,
  saveWorkflowRun,
  deductTokens,
  TOKEN_COSTS
} from "./persistenceService";
import { AngleMinerResults, TestLabResults, AuditResult } from "../types";

export const MAX_INPUT_CHARS = 12000;

// Mock implementations that return demo data
export const analyzeMarketingAngle = async (params: any, userId?: string): Promise<AngleMinerResults> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));

  const mockResult: AngleMinerResults = {
    prime: [
      {
        title: "The Efficiency Revolution",
        hook: "Stop wasting time on manual processes",
        rational: "Modern businesses demand automation and efficiency",
        score: 94
      },
      {
        title: "The Smart Choice",
        hook: "Why settle for less when you can have intelligent solutions",
        rational: "Leverages the desire for intelligent, adaptive systems",
        score: 89
      }
    ],
    supporting: [
      {
        title: "Future-Proof Your Business",
        hook: "Stay ahead of the competition with cutting-edge technology",
        rational: "Addresses fear of being left behind",
        score: 82
      }
    ],
    exploratory: [
      {
        title: "The Human Touch",
        hook: "Technology that understands your unique needs",
        rational: "Combines AI efficiency with personal attention",
        score: 76
      }
    ],
    hooks: [
      {
        platform: "LinkedIn",
        short: "Transform your workflow with AI",
        expanded: "Discover how artificial intelligence can revolutionize your business processes and boost productivity"
      },
      {
        platform: "Twitter",
        short: "AI-powered efficiency 🚀",
        expanded: "Stop manual work. Start intelligent automation. Your business deserves better."
      }
    ]
  };

  if (userId) {
    await saveAngleMinerResult(userId, params.product || 'Demo Product', params.industry || 'Demo Industry', params.target || 'Demo Target', mockResult);
    await deductTokens(userId, TOKEN_COSTS.ANGLEMINER_GENERATE);
  }

  return mockResult;
};

export const improveAngle = async (text: string, userId?: string): Promise<string> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500));

  const improved = `"${text}" - Enhanced with psychological triggers and compelling language for maximum impact.`;

  if (userId) {
    await deductTokens(userId, TOKEN_COSTS.ANGLEMINER_IMPROVE);
  }

  return improved;
};

export const runTestLabComparison = async (type: string, variants: string[], userId?: string): Promise<TestLabResults> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2500));

  const mockResult: TestLabResults = {
    variants: variants.map((text, index) => ({
      label: `Variant ${index + 1}`,
      text: text,
      score: Math.floor(Math.random() * 40) + 60 // Random score between 60-100
    })),
    winnerLabel: "Variant 1",
    explanation: "Variant 1 performed best due to clearer value proposition and stronger call-to-action language."
  };

  if (userId) {
    await saveTestLabResult(userId, type, variants, mockResult);
    await deductTokens(userId, TOKEN_COSTS.TESTLAB_RUN);
  }

  return mockResult;
};

export const auditConversion = async (input: string, context: string, userId?: string): Promise<AuditResult> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 3000));

  const mockResult: AuditResult = {
    score: 72,
    summary: "Your landing page has solid fundamentals but needs improvement in conversion optimization.",
    issues: [
      {
        blocker: "CTA button placement",
        impact: "Users may not notice the primary action"
      },
      {
        blocker: "Value proposition clarity",
        impact: "Visitors might not immediately understand your unique benefits"
      }
    ],
    fixes: [
      {
        what: "Move CTA above the fold",
        how: "Position your primary call-to-action button in the top half of the page",
        expectedResult: "15-25% increase in click-through rates"
      },
      {
        what: "Strengthen headline",
        how: "Make your main headline more specific and benefit-focused",
        expectedResult: "Improved user engagement and reduced bounce rate"
      }
    ]
  };

  if (userId) {
    await saveConversionDoctorResult(userId, input, mockResult.score, mockResult);
    await deductTokens(userId, TOKEN_COSTS.CONVERSION_AUDIT);
  }

  return mockResult;
};

export const improveWorkflowAssets = async (angle: string, issues: string[], userId?: string, testScore?: number, auditScore?: number): Promise<any> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));

  const mockResult = {
    headline: "Transform Your Business with Intelligent Automation",
    cta: "Start Your Free Trial Today",
    offer: "Get 14 days free + 50% off your first 3 months"
  };

  if (userId && testScore !== undefined && auditScore !== undefined) {
    await saveWorkflowRun(userId, angle, testScore, auditScore, mockResult);
    await deductTokens(userId, TOKEN_COSTS.WORKFLOW_RUN);
  }

  return mockResult;
};
