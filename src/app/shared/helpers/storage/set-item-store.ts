export const setItemStore: <T>(key: string, value: T) => void
    = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};
