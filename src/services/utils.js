// formats price to Kenyan Shilling 

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(value)

// [key, label, unit] — maps property fields to readable labels

export const propertySpecs = [
  ['beds', 'Beds'],
  ['baths', 'Baths'],
  ['area', 'Area', ' sqft'],
]