import { useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch {
      console.error('Failed to get item from localStorage');
      return undefined;
    }
  });

  const set = (newValue: T) => {
    try {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      console.error('Failed to set item into localStorage');
    }
  };

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(undefined); // Clear the state as well
    } catch {
      console.error('Failed to delete item from localStorage');
    }
  };

  return { value, set, remove };
};
