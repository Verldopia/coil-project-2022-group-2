export const ROUTES = Object.freeze({
  // Admin
  ADMINLogin: 'admin-login',
  ADMIN: 'x',
  ADMINLive: 'x-live',
  ADMINAdministration: 'x-administration',
  ADMINContent: 'x-content',
  ADMINContentApproval: 'x-content-approval',
  ADMINStock: 'x-stock',
  ADMINShipping: 'x-shipping',
  ADMINPayments: 'x-payments',
  ADMINDiscount: 'x-discount',
  ADMINCustomers: 'x-customers',

  // User
  ABOUT: 'about',
  ACCOUNT: 'account',
  CATEGORIES: 'categories/:title',
  CONTACT: 'contact',
  ITEMS: 'item/:id',
  LANDING: '/',
  LOGIN: 'login',
  REGISTER: 'register',
  RESULTS: 'search/:title',
  WISHLIST: 'wishlist',
});
