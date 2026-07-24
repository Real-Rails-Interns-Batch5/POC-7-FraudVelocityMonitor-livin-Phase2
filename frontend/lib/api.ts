import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fraudvelocitymonitor-backend.onrender.com",
  timeout: 5000,
});

// Fraud Events
export const fraudApi = {
  getEvents: (riskLevel?: string, status?: string, limit?: number) => {
    const params = new URLSearchParams();
    if (riskLevel) params.append('risk_level', riskLevel);
    if (status) params.append('status', status);
    if (limit) params.append('limit', limit.toString());

    return apiClient.get(`/api/fraud-events?${params.toString()}`);
  },

  getEvent: (eventId: string) =>
    apiClient.get(`/api/fraud-events/${eventId}`),

  approveEvent: (eventId: string) =>
    apiClient.post(`/api/fraud-events/${eventId}/approve`),

  blockEvent: (eventId: string) =>
    apiClient.post(`/api/fraud-events/${eventId}/block`),
};

// Analytics
export const analyticsApi = {
  getMetrics: () =>
    apiClient.get('/api/analytics'),

  getRiskTrend: () =>
    apiClient.get('/api/risk-score-trend'),
};

// Rules
export const rulesApi = {
  getVelocityRules: (activeOnly?: boolean) => {
    const params = activeOnly ? '?active_only=true' : '';
    return apiClient.get(`/api/velocity-rules${params}`);
  },
};

// Review Queue
export const reviewApi = {
  getQueue: (priority?: string, status?: string) => {
    const params = new URLSearchParams();
    if (priority) params.append('priority', priority);
    if (status) params.append('status', status);

    return apiClient.get(`/api/review-queue?${params.toString()}`);
  },
};

// Sample Data
export const dataApi = {
  downloadSampleData: () =>
    apiClient.get('/api/sample-data'),
};

export default apiClient;
