// Global error handler to suppress console errors in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // Override console.error to prevent red error popups
  const originalError = console.error;
  console.error = (...args) => {
    // Only log in development, suppress in production
    if (process.env.NODE_ENV === 'development') {
      originalError.apply(console, args);
    }
  };

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Prevent the default browser error popup
    event.preventDefault();
    // Optionally log to a service instead
    console.warn('Unhandled promise rejection:', event.reason);
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    // Prevent the default browser error popup
    event.preventDefault();
    // Optionally log to a service instead
    console.warn('Global error:', event.error);
  });
}