// Utility functions and constants for the property management application

/**
 * Formats a numeric value as Kenyan Shilling (KES) currency
 * @param {number} value - The numerical value to format
 * @returns {string} The formatted currency string (e.g., "KES 1,000,000")
 */
export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(value)

/**
 * Array of property specification fields used for display
 * Each entry: [field_key, display_label, optional_suffix]
 * Used to render property details in cards and detail views
 */
export const propertySpecs = [
  ['beds', 'Beds'],
  ['baths', 'Baths'],
  ['area', 'Area', ' sqft'],
]
