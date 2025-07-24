// Google Analytics gtag functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, {
  event_category,
  event_label,
  value,
  ...parameters
}: {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', action, {
      event_category,
      event_label,
      value,
      ...parameters,
    })
  } else if (process.env.NODE_ENV === 'development') {
    console.log('📊 GA Event (Dev Mode):', action, { event_category, event_label, value, ...parameters })
  }
}

// カスタムイベント関数
export const trackBlogView = (postTitle: string, category?: string) => {
  event('blog_view', {
    event_category: 'Blog',
    event_label: postTitle,
    custom_parameter_category: category,
  })
}

export const trackCategoryClick = (categoryName: string) => {
  event('category_click', {
    event_category: 'Navigation',
    event_label: categoryName,
  })
}

export const trackSearchQuery = (searchTerm: string) => {
  event('search', {
    search_term: searchTerm,
    event_category: 'Search',
  })
}

export const trackShareClick = (platform: string, postTitle: string) => {
  event('share', {
    method: platform,
    content_type: 'blog_post',
    item_id: postTitle,
    event_category: 'Social',
  })
}

export const trackContactFormSubmit = () => {
  event('contact_form_submit', {
    event_category: 'Contact',
    event_label: 'Contact Form',
  })
}