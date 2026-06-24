export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function getRiskColor(riskLevel: string): string {
  switch (riskLevel) {
    case 'LOW':
      return 'text-green-400';
    case 'MEDIUM':
      return 'text-yellow-400';
    case 'HIGH':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
}

export function getRiskBgColor(riskLevel: string): string {
  switch (riskLevel) {
    case 'LOW':
      return 'bg-green-500/10 border-green-500/20';
    case 'MEDIUM':
      return 'bg-yellow-500/10 border-yellow-500/20';
    case 'HIGH':
      return 'bg-red-500/10 border-red-500/20';
    default:
      return 'bg-gray-500/10 border-gray-500/20';
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'LOW':
      return 'text-blue-400';
    case 'MEDIUM':
      return 'text-yellow-400';
    case 'HIGH':
      return 'text-orange-400';
    case 'CRITICAL':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
}
