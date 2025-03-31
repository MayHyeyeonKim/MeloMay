import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";
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
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");
  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);

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
