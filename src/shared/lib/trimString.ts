export const trimString = (string: string) => {
  if (string.length <= 72) return string;
  return `${string.slice(0, 72)}...`;
};
