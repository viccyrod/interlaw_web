import { useEffect } from 'react';
import * as gtm from '@/config/gtm';

interface DataLayerEvent {
  event: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

interface CalculatorEventData {
  step_name?: string;
  income?: number;
  country?: string;
  strategy?: string;
  currency?: string;
  [key: string]: string | number | undefined;
}

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventData: CalculatorEventData = {}) => {
    if (typeof window !== 'undefined') {
      gtm.trackCalculatorEvent(eventName, eventData);
    }
  };

  const trackCalculatorStep = (
    step: 'initiated' | 'country_selected' | 'income_entered' | 'strategy_selected' | 'results_viewed' | 'consultation_booked',
    data: CalculatorEventData = {}
  ) => {
    trackEvent('calculator_step', {
      step_name: step,
      ...data,
    });
  };

  const trackCalculatorResults = (results: {
    income: number;
    country: string;
    strategy: string;
    annualSavings: number;
    tenYearSavings: number;
    monthsToBreakeven: number;
  }) => {
    trackEvent('calculator_results', {
      ...results,
      savings_range: getSavingsRange(results.annualSavings),
      currency: results.country === 'Australia' ? 'AUD' : 'USD',
      event_category: 'Calculator',
      event_label: `${results.country} - ${results.strategy}`
    });
  };

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gtm.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return {
    trackEvent,
    trackCalculatorStep,
    trackCalculatorResults,
  };
};

// Helper function to categorize savings into ranges
const getSavingsRange = (annualSavings: number): string => {
  if (annualSavings < 10000) return 'under_10k';
  if (annualSavings < 50000) return '10k_50k';
  if (annualSavings < 100000) return '50k_100k';
  if (annualSavings < 500000) return '100k_500k';
  return 'over_500k';
}; 