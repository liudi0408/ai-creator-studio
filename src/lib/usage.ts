// 免费用户使用次数限制（基于 localStorage）
const FREE_DAILY_LIMIT = 3;
const STORAGE_KEY = 'ai_creator_usage';

export interface UsageData {
  date: string;
  count: number;
  isPro: boolean;
}

export function getUsage(): UsageData {
  if (typeof window === 'undefined') {
    return { date: '', count: 0, isPro: false };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data: UsageData = JSON.parse(raw);
      const today = new Date().toISOString().split('T')[0];
      if (data.date === today) return data;
      // 新的一天，重置计数
      const reset = { date: today, count: 0, isPro: data.isPro };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
      return reset;
    }
  } catch {}
  return { date: new Date().toISOString().split('T')[0], count: 0, isPro: false };
}

export function incrementUsage(): UsageData {
  const usage = getUsage();
  usage.count += 1;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  }
  return usage;
}

export function canGenerate(): boolean {
  const usage = getUsage();
  return usage.isPro || usage.count < FREE_DAILY_LIMIT;
}

export function getRemainingCount(): number {
  const usage = getUsage();
  if (usage.isPro) return Infinity;
  return Math.max(0, FREE_DAILY_LIMIT - usage.count);
}

export function setPro(status: boolean): void {
  const usage = getUsage();
  usage.isPro = status;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  }
}
