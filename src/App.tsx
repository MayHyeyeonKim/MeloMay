import { Route, Routes } from "react-router";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import SearchWithKeywordPage from "./pages/SearchWithKeywordPage";
import LibraryPage from "./pages/LibraryPage";
/**
0. sidebar
1. landingPage /
2. searchPage /search/
3. searchResultPage /serch/:keyword
4. playlistDetailPage /palylist/:id
5. mobileVersion - playlist /playlist
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
        <Route path="playlist/:id" element={<LibraryPage />} />
        {/* <Route path="playlist" element={<PlaylistPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
