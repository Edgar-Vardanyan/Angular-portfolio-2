export const getItemStore: <T>(key: string) => T = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key));
};
