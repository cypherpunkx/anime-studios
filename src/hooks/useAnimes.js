import { useEffect, useState } from "react";
import { api } from "../lib/axios";

function useAnimes() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [genre, setGenre] = useState("popular");
  const [page, setPage] = useState(1);
  const [queryGlobal, setQueryGlobal] = useState("");

  const handleActive = (value) => {
    setGenre(value);
    return;
  };

  const gotoNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const gotoPrevPage = () => {
    if (page < 1) return 1;
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(genre, {
        params: {
          page,
        },
      })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [genre, page]);

  return {
    articles,
    genre,
    isLoading,
    handleActive,
    gotoNextPage,
    gotoPrevPage,
    page,
  };
}

export default useAnimes;
