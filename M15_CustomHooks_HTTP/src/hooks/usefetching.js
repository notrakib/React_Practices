import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchTask = useCallback(async (receive, applydata) => {

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(receive.url, {
        method: receive.method ? receive.method : "GET",
        headers: receive.headers ? receive.headers : {},
        body: receive.body ? JSON.stringify(receive.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applydata(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);

  return { isLoading, error, fetchTask };
};

export default useHttp;
