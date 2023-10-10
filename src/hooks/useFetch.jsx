import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../apis/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Loader Class
    setLoading("loading ting ting...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      // Error Check this will be dynamic
      .catch((err) => {
        setLoading(false);
        setError("OOPs Something Fishy");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
