// Product Images
// import product1 from '@/assets/images/products/1.png'
// import product2 from '@/assets/images/products/2.png'
// import product3 from '@/assets/images/products/3.png'

// Country Flags
import jpFlag from '@/assets/images/flags/jp.svg'
import deFlag from '@/assets/images/flags/de.svg'
import usFlag from '@/assets/images/flags/us.svg'

export const careInstructions = [
  {
    id: 1,
    title: 'SmartX Watch',
    productId: 'DPP-101',
    careType: 'Cleaning',
    instructions: 'Wipe with a soft dry cloth. Avoid water and chemical cleaners.',
    originCountry: 'Japan',
    countryFlag: jpFlag,
    status: 'Active',
    lastUpdated: '2025-11-01',
  },
  {
    id: 2,
    title: 'EcoDrive Scooter',
    productId: 'DPP-102',
    careType: 'Maintenance',
    instructions: 'Check battery monthly. Keep tires inflated. Store in dry area.',
    originCountry: 'Germany',
    countryFlag: deFlag,
    status: 'Pending',
    lastUpdated: '2025-10-28',
  },
  {
    id: 3,
    title: 'AeroDrone X2',
    productId: 'DPP-103',
    careType: 'Usage',
    instructions: 'Do not fly in rainy weather. Charge battery fully before flight.',
    originCountry: 'USA',
    countryFlag: usFlag,
    status: 'Active',
    lastUpdated: '2025-11-05',
  },
]
