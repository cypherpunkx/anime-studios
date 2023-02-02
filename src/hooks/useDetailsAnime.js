import { useEffect, useState } from "react";
import { api } from "../lib/axios";

function useDetailsAnime(id) {
  const [anime, setAnime] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`anime-details/${id}`)
      .then((response) => setAnime(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { anime, isLoading };
}

export default useDetailsAnime;
