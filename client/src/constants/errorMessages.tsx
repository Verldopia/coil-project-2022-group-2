export const ERRORS = {
  // Registration / Login fields
  NAME_TOO_LONG: 'Name is too long',
  NAME_REQUIRED: 'Name is required',
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'This is not a valid email',
  PASS_TOO_SHORT: 'Password is too short',
  PASS_REQUIRED: 'Password is required',

  // Content uploader
  TITLE_REQUIRED: 'Title is required',
  TITLE_TOO_SHORT: 'Title is too short',
  DESC_REQUIRED: 'Description is required',
  PRICE_REQUIRED: 'Price is required',
  STOCK_REQUIRED: 'Stock is required',
  TYPE_REQUIRED:
    'Provide a subcategory, this will be added to the category filters',
  IMG_REQUIRED: 'Image is required',
  PRODUCT_DUP: 'Product already exists',

  // Checkout
  // !! Hi Rachel, for line 23, 24: the type is written before the message. for example: "{Title} is too short", "{Address} is too short,..". ==> Please delete this message :)
  FIELD_TOO_SHORT: 'is too short',
  FIELD_REQUIRED: ' is required',
  DISC_INVALID: 'Discount code is invalid',
};
