import React, { useLayoutEffect } from "react";
import useStore from "../store";
import filterKeys from "../utils/filterKeys";
import { Keys } from "../utils/StoreKeys";

const useFetch = <T>(
  fetches: {
    [key in Keys<T>]: () => void;
  },
  deps?: React.DependencyList
) => {
  const store = useStore();
  const { setLoading, setData, setError } = store;

  const filteredKeys = filterKeys(store, fetches) as any as Keys<T>[];

  useLayoutEffect(() => {
    const promises = filteredKeys.map((key) => fetches[key]());
    setLoading(filteredKeys);
    Promise.all(promises)
      .then((results) => {
        results.forEach((result: any, index) => {
          const key = filteredKeys[index];
          if (key === "categories") {
            setData(key, result.data);
          } else {
            setData(key, { total: result.data.total, items: result.data[key] });
          }
        });
      })
      .catch((error) => {
        setError(
          error.response?.data.msg ||
            error.response?.data ||
            "No'malum xatolik",
          filteredKeys
        );
      });
  }, deps || []);

  return store;
};

export default useFetch;
