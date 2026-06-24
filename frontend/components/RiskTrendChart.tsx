'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RiskScoreTrend } from '@/types';

interface RiskTrendChartProps {
  data: RiskScoreTrend[];
}

export default function RiskTrendChart({ data }: RiskTrendChartProps) {
  const formattedData = data.map(item => ({
    ...item,
    time: new Date(item.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  }));

  return (
    <div className="rails-card h-64">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
        Risk Score Trend (24h)
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280" 
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280" 
            style={{ fontSize: '12px' }}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0B1117', 
              border: '1px solid #1F2937',
              borderRadius: '6px'
            }}
            labelStyle={{ color: '#38BDF8' }}
          />
          <Line 
            type="monotone" 
            dataKey="avg_score" 
            stroke="#38BDF8" 
            strokeWidth={2}
            dot={false}
            name="Avg Risk Score"
          />
          <Line 
            type="monotone" 
            dataKey="high_risk_count" 
            stroke="#818CF8" 
            strokeWidth={2}
            dot={false}
            name="High Risk Count"
            yAxisId="right"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
