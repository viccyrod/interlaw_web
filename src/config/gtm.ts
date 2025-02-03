export const GTM_ID = 'GTM-5N2RZ257'
export const GA4_ID = 'G-EDH4FQD7D9'

interface CustomEventData {
  [key: string]: string | number | boolean | undefined;
}

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_location: url,
      page_title: document.title
    })
  }
}

// Custom event tracking for GA4
export const event = ({ action, category, label, value, ...customData }: {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: string | number | undefined
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
      ...customData
    })
  }
}

// Helper function for calculator events
export const trackCalculatorEvent = (eventName: string, data: CustomEventData = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...data,
      event_time: new Date().toISOString()
    })
  }
} 