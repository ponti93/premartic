
import {
  AngleMinerResults,
  TestLabResults,
  AuditResult,
  UserProfile,
  SystemSettings,
  AuditLogEntry,
  SecurityEvent,
  ActionLogEntry
} from '../types';

export const TOKEN_COSTS = {
  ANGLEMINER_GENERATE: 10,
  ANGLEMINER_IMPROVE: 3,
  TESTLAB_RUN: 6,
  TESTLAB_IMPROVE: 3,
  CONVERSION_AUDIT: 12,
  CONVERSION_REWRITE: 4,
  WORKFLOW_RUN: 20,
};

// Mock data for demo purposes
const mockUserProfile: UserProfile = {
  id: 'demo-user',
  email: 'demo@premartic.com',
  tokens: 50,
  tier: 'free',
  role: 'user',
  session_started: new Date().toISOString(),
  last_active: new Date().toISOString()
};

const mockSystemSettings: SystemSettings = {
  emergency_lockdown: false,
  last_updated: new Date().toISOString(),
  updated_by: 'system'
};

// Mock implementations that return demo data
export const getSystemSettings = async (): Promise<SystemSettings> => {
  return mockSystemSettings;
};

export const updateSystemEmergency = async (admin: UserProfile, active: boolean) => {
  mockSystemSettings.emergency_lockdown = active;
  mockSystemSettings.last_updated = new Date().toISOString();
  mockSystemSettings.updated_by = admin.email;
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  return mockUserProfile;
};

export const ensureUserProfile = async (userId: string, email: string) => {
  // Mock - do nothing
};

export const logUserAction = async (entry: Omit<ActionLogEntry, 'id' | 'timestamp' | 'hash' | 'previous_hash'>) => {
  // Mock - do nothing
};

export const logExecutionTrace = async (trace: any) => {
  // Mock - do nothing
};

export const logSecurityViolation = async (event: Omit<SecurityEvent, 'id' | 'timestamp' | 'hash' | 'previous_hash'>) => {
  // Mock - do nothing
};

export const logAdminAction = async (admin: UserProfile, action: string, target: string, metadata?: any) => {
  // Mock - do nothing
};

// --- TOKEN MANAGEMENT ---

export const deductTokens = async (userId: string, cost: number): Promise<number> => {
  const currentTokens = mockUserProfile.tokens;
  const newTokens = Math.max(0, currentTokens - cost);
  mockUserProfile.tokens = newTokens;
  return newTokens;
};

export const refundTokens = async (userId: string, amount: number): Promise<void> => {
  mockUserProfile.tokens += amount;
};

// --- ARTIFACT PERSISTENCE ---

export const saveAngleMinerResult = async (userId: string, product: string, industry: string, target: string, results: AngleMinerResults) => {
  return { id: 'mock_id_' + Date.now(), ...results };
};

export const deleteAngleMinerResult = async (id: string) => {
  // Mock - do nothing
};

export const saveTestLabResult = async (userId: string, type: string, variants: string[], results: TestLabResults) => {
  return { id: 'mock_id_' + Date.now(), ...results };
};

export const deleteTestLabResult = async (id: string) => {
  // Mock - do nothing
};

export const saveConversionDoctorResult = async (userId: string, input: string, score: number, result: AuditResult) => {
  return { id: 'mock_id_' + Date.now(), ...result };
};

export const deleteConversionDoctorResult = async (id: string) => {
  // Mock - do nothing
};

export const saveWorkflowRun = async (userId: string, angle: string, testScore: number, conversionScore: number, finalOutput: any) => {
  return { id: 'mock_id_' + Date.now(), ...finalOutput };
};

export const deleteWorkflowRun = async (id: string) => {
  // Mock - do nothing
};

// --- ADMIN FUNCTIONS ---

export const adminGetAllUsers = async (): Promise<UserProfile[]> => {
  return [mockUserProfile];
};

export const adminGetAuditLogs = async (): Promise<AuditLogEntry[]> => {
  return [];
};

export const adminGetSecurityLogs = async (): Promise<SecurityEvent[]> => {
  return [];
};

export const adminSuspendUser = async (admin: UserProfile, userId: string, reason: string) => {
  // Mock - do nothing
};

export const adminUpdateUserTokens = async (admin: UserProfile, userId: string, tokens: number) => {
  mockUserProfile.tokens = tokens;
};

export const updateUserRiskProfile = async (userId: string, riskScore: number, isSuspended: boolean, reason?: string) => {
  // Mock - do nothing
};
