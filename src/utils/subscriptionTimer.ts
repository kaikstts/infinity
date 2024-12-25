export const checkSubscriptionStatus = (subscriptionDate: Date, planType: 'daily' | 'weekly' | 'monthly'): boolean => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - subscriptionDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  switch (planType) {
    case 'daily':
      return diffDays <= 1;
    case 'weekly':
      return diffDays <= 7;
    case 'monthly':
      return diffDays <= 30;
    default:
      return false;
  }
};