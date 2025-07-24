export interface GtagConfig {
  page_path?: string
  page_title?: string
  page_location?: string
  custom_parameter_category?: string
}

export interface GtagEvent {
  event_category?: string
  event_label?: string
  value?: number
  search_term?: string
  method?: string
  content_type?: string
  item_id?: string
  [key: string]: any
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent',
      targetId?: string | 'update',
      config?: GtagConfig | GtagEvent | { analytics_storage?: string; ad_storage?: string }
    ) => void
    dataLayer: any[]
  }
}