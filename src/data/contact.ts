export const CONTACT = {
  address:
    'Block 1 Lot 18 Commonwealth Ave., Jordan Plains III, Brgy. Pasong Putik Proper, Novaliches, Quezon City.',
  phone: '',
  email: '',
  hours: '',
} as const

export const getDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT.address)}`
