export const Capitalize = (text: string | undefined) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const Lowercase = (text: string | undefined) => {
  if (!text) return '';
  return text?.toLowerCase();
};
