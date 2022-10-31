const Capitalize = (text: string | undefined) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const Lowercase = (text: string | undefined) => {
  if (!text) return '';
  return text?.toLowerCase();
};

// Create slug from title
const Slugify = (text: string | undefined) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Retrieve ID from slug
const SlugifyID = (text: string | undefined) => {
  const splitText = text?.split('=');
  return Number(splitText?.[0]);
};

export { Capitalize, Lowercase, Slugify, SlugifyID };
