export const removeItemStore: (key: string) => void
    = (key: string): void => {
    localStorage.removeItem(key);
};
