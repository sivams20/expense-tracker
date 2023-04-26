import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return saved;
      }
    }
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  return setLocalStorageValue;
}

export default useLocalStorage;
