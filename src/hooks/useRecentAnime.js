import { useEffect, useState } from "react";
import { api } from "../lib/axios";

function useRecentAnimes() {
  const [recents, setRecents] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("recent-release")
      .then((response) => {
        setRecents(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { recents, isLoading };
}

export default useRecentAnimes;
