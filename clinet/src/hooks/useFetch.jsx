import { useState, useEffect } from "react";
import { request } from "../request";

const useFetch = (url) => {
  // State to store fetched data, loading state, and error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Start loading
      setIsLoading(true);
      try {
        // Fetch data from the provided URL
        const res = await request.get(url);
        // Update the data state with the fetched data
        setData(res.data.data);
      } catch (error) {
        // Handle any errors that occur during the request
        setError(error);
      }
      // Finish loading
      setIsLoading(false);
    };

    // Call the fetchData function when the URL changes
    fetchData();
  }, [url]);

  // Return the fetched data, loading state, and error
  return { data, isLoading, error };
};

export default useFetch;
