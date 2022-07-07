import { useState, useEffect } from 'react';

const useArray = (start, limit) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const starter = start || new Date().getFullYear() - 100;
    const limitter = limit || new Date().getFullYear();
    const temp = [];
    for (let i = starter; i <= limitter; i++) {
      temp.push(i);
    }
    setArray(temp.sort((a, b) => b - a));
  }, [limit]);

  return { array };
};

export default useArray;
