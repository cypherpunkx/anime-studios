import { lazy } from "react";

const Animes = lazy(() => import("./Animes"));
const DetailsAnime = lazy(() => import("./DetailsAnime"));

export { Animes, DetailsAnime };
