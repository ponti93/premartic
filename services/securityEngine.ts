
import { UserProfile, SystemLoadLevel, UserRole } from '../types';

const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  'user': ['analysis:execute', 'audit:execute', 'simulation:execute'],
  'ops_admin': ['admin:read', 'admin:user_management', 'admin:token_management', 'analysis:execute', 'audit:execute', 'simulation:execute'],
  'super_admin': ['admin:read', 'admin:user_management', 'admin:token_management', 'admin:system_config', 'admin:security_override', 'analysis:execute', 'audit:execute', 'simulation:execute']
};

const GUEST_PERMISSIONS: string[] = ['analysis:execute', 'audit:execute', 'simulation:execute'];

export const SecurityEngine = {
  /**
   * Global Check for Emergency Lockdown.
   */
  async isSystemLocked(): Promise<boolean> {
    return false; // Mock - always unlocked
  },

  /**
   * Simplified chain integrity check
   */
  async verifyChainIntegrity(logs: any[]): Promise<{ valid: boolean; failedIndex?: number }> {
    return { valid: true }; // Mock - always valid
  },

  async detectAutomationAbuse(user: UserProfile | null): Promise<{ status: 'clean' | 'flagged' | 'blocked', reason?: string }> {
    return { status: 'clean' }; // Mock - always clean
  },

  async checkPermission(user: UserProfile | null, requiredScope: string, resourceOwnerId?: string): Promise<{ allowed: boolean, stepUpRequired?: boolean, error?: string }> {
    if (!user) return { allowed: true }; // Allow everything for demo
    if (user.is_suspended) return { allowed: false, error: "Identity access revoked." };
    return { allowed: true }; // Allow everything for demo
  },

  async monitorAdminBehavior(admin: UserProfile, action: string): Promise<{ flagged: boolean, reason?: string }> {
    return { flagged: false }; // Mock - never flagged
  },

  async verifyStepUp(admin: UserProfile, code: string): Promise<{ valid: boolean, error?: string }> {
    return { valid: code === '133742' }; // Mock - accept demo code
  },

  async detectAdversarialPatterns(input: string, user: UserProfile | null): Promise<{ safe: boolean, reason?: string }> {
    return { safe: true }; // Mock - always safe
  },

  getSystemLoadLevel(): { level: SystemLoadLevel, score: number, percentage: number } {
    return { level: 'NORMAL', score: 0, percentage: 0 }; // Mock - always normal
  },

  async checkSystemCapacity(user: UserProfile | null, endpoint: string): Promise<{ allowed: boolean, throttleMs?: number, error?: string, isDegraded: boolean }> {
    return { allowed: true, isDegraded: false }; // Mock - always allowed
  },

  recordOperationCost(endpoint: string) {
    // Mock - do nothing
  },

  validateScope(user: UserProfile | null, required: string): boolean {
    if (!user) {
      return GUEST_PERMISSIONS.includes(required);
    }
    return (ROLE_PERMISSIONS[user.role] || []).includes(required);
  },

  async validateUserTrust(user: UserProfile | null): Promise<{ allowed: boolean, error?: string }> {
    if (!user) return { allowed: true };
    if (user.is_suspended) return { allowed: false, error: "Access Revoked." };
    return { allowed: true };
  },

  async validateInput(input: string, user: UserProfile | null): Promise<{ isValid: boolean, error?: string }> {
    if (input.length > 100000) return { isValid: false, error: "Payload exceeds neural buffer limits." };
    return { isValid: true };
  },

  async checkDuplicateInput(user: UserProfile | null, input: string): Promise<{ isDuplicate: boolean }> {
    return { isDuplicate: false };
  },

  getCompositeIdentity(user?: UserProfile | null): string {
    return user?.id || 'anonymous';
  },

  sanitizeErrorMessage(msg: string): string {
    return msg.replace(/[A-Za-z0-9]{20,}/g, '[REDACTED]');
  },

  async checkRateLimit(user: UserProfile | null): Promise<{ status: 'allowed' | 'throttle' | 'blocked', waitMs?: number, error?: string }> {
    return { status: 'allowed' }; // Mock - always allowed
  },

  async handleViolation(type: string, severity: string, details: string, user?: UserProfile | null, identity?: string) {
    // Mock - do nothing
  },

  async handleHoneypotTrigger(user: UserProfile | null) {
    // Mock - do nothing
  },

  async checkLoginVelocity(email: string): Promise<{ allowed: boolean, error?: string, waitSeconds?: number }> {
    return { allowed: true };
  },

  async adaptiveHash(password: string, salt: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },

  async checkSessionIntegrity(user: any, ip: string): Promise<{ status: 'trusted' | 'step_up' | 'blocked', reason?: string }> {
    return { status: 'trusted' };
  },

  async requestStepUpOTP(user: any): Promise<{ allowed: boolean, code?: string, error?: string }> {
    return { allowed: true, code: '133742' };
  },

  async verifyStepUpOTP(code: string, user: any): Promise<{ valid: boolean, error?: string }> {
    return { valid: code === '133742' };
  },

  async recordLoginFailure(email: string) {},

  resetLoginAttempts(email: string) {},

  async checkEndpointQuota(user: any, endpoint: string): Promise<{ allowed: boolean, error?: string }> {
    return { allowed: true };
  },

  obfuscateSecret(s: string) {
    return `***${s.substring(s.length - 4)}`;
  }
};
