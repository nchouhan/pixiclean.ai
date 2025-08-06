// Pricing utility for location-based currency display
export interface PricingInfo {
  originalPrice: string;
  originalPriceFormatted: string;
  currency: string;
  currencySymbol: string;
  isIndianUser: boolean;
}

// Detect if user is from India based on IP geolocation
export const detectUserLocation = async (): Promise<boolean> => {
  try {
    // Use a free geolocation API
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code === 'IN';
  } catch (error) {
    console.warn('Could not detect user location, defaulting to USD:', error);
    return false; // Default to USD if detection fails
  }
};

// Get pricing information based on user location
export const getPricingInfo = (isIndianUser: boolean): PricingInfo => {
  if (isIndianUser) {
    return {
      originalPrice: '449',
      originalPriceFormatted: '₹449',
      currency: 'INR',
      currencySymbol: '₹',
      isIndianUser: true
    };
  } else {
    return {
      originalPrice: '4.99',
      originalPriceFormatted: '$4.99',
      currency: 'USD',
      currencySymbol: '$',
      isIndianUser: false
    };
  }
};

// Format price with appropriate currency
export const formatPrice = (price: string, currency: string, currencySymbol: string): string => {
  if (currency === 'INR') {
    return `${currencySymbol}${price}`;
  } else {
    return `${currencySymbol}${price}`;
  }
};

// Get savings text based on currency
export const getSavingsText = (isIndianUser: boolean): string => {
  if (isIndianUser) {
    return 'Save ₹449';
  } else {
    return 'Save $4.99';
  }
};

// Get limited time text based on currency
export const getLimitedTimeText = (isIndianUser: boolean): string => {
  if (isIndianUser) {
    return 'Limited Time Offer - Save 100%';
  } else {
    return 'Limited Time Offer - Save 100%';
  }
}; 