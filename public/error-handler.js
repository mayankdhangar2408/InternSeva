// Global error handler to suppress console errors in production
if (typeof window !== 'undefined') {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Prevent the default browser error popup
    event.preventDefault();
    // Optionally log to a service instead (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.warn('Unhandled promise rejection:', event.reason);
    }
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    // Prevent certain error popups
    if (event.message && event.message.includes('Loading CSS chunk')) {
      event.preventDefault();
      return;
    }
    
    // Prevent React hydration errors from showing popups
    if (event.message && event.message.includes('Hydration')) {
      event.preventDefault();
      return;
    }
  });
}