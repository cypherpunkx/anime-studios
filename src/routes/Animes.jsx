import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { Anime, Categories, Loader, Pagination, RecentAnime, Search } from "../components";
import useAnimes from "../hooks/useAnimes";

function Animes() {
  const { articles, handleActive, genre, isLoading, gotoPrevPage, gotoNextPage, page } = useAnimes();
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    return articles.filter(article => article.animeTitle.toLowerCase().includes(query.toLowerCase()) || article.releasedDate.includes(query))
  }, [articles, query])

  return (
    <div className="flex flex-wrap sm:flex-nowrap mx-4 sm:mx-0 gap-4">
      <aside className="flex-auto sm:flex-none sm:w-60
       space-y-4">
        <Search setQuery={setQuery} />
        <Categories handleActive={handleActive} genre={genre} />
        <RecentAnime />
      </aside>
      {isLoading && (
        <div className="w-full sm:flex-auto justify-self-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col">
          <div className={`mx-auto mb-6 ${classNames({ 'hidden': genre !== 'popular' })}`}>
            <h1 className="text-4xl uppercase tracking-widest text-yellow-400">Popular</h1>
          </div>
          <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {items.map(article => (
              <Anime article={article} key={article.animeId} />
            ))}
          </article>
          {items.length === 20 && (
            <div className="justify-self-center text-center flex-1 mb-6">
              <Pagination page={page} gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Animes;
