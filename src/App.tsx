import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";
/**
0. sidebar
1. landingPage /
2. searchPage /search/
3. searchResultPage /serch/:keyword
4. playlistDetailPage /palylist/:id
5. mobileVersion - playlist /playlist
*/

// Lazy Loading
const AppLayout = lazy(() => import("./layout/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const SearchWithKeywordPage = lazy(
  () => import("./pages/SearchWithKeywordPage")
);
const LibraryPage = lazy(() => import("./pages/LibraryPage"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<LibraryPage />} />
          {/* <Route path="playlist" element={<PlaylistPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
