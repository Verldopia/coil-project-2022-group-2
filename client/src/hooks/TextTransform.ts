export const Capitalize = (text: string | undefined) => {
  if (typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const Lowercase = (text: string | undefined) => {
  if (typeof text !== 'string') return '';
  return text.toLowerCase();
};
