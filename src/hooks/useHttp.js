import { useState, useEffect } from 'react';

export const useHttp = (url, storageItemKey, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let cachedData = localStorage.getItem(storageItemKey);
    if(cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      setIsLoading(true);
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(fetchedData => {
          (fetchedData.works &&
            fetchedData.works.forEach(book => {
              let randomTwoDigitNum = [];
              randomTwoDigitNum.push(Math.floor(Math.random() * 90 + 10));
              randomTwoDigitNum.push(99);
              book["price"] = randomTwoDigitNum;
            }));
          setData(fetchedData);
          localStorage.setItem(storageItemKey, JSON.stringify(fetchedData));
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [isLoading, data];
};