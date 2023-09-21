export const dateZeroFill = (value: string) => {
  return value.length === 1 ? `0${value}` : value;
};
