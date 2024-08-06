import ArticleList from "./components/article/ArticleList";
import { Routes, Route } from "react-router-dom";

import EditArticle from "./components/article/ArticleEdit";
import CreateArticle from "./components/article/ArticleCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/edit-article/:id" element={<EditArticle />} />
      <Route path="/create" element={<CreateArticle />} />
    </Routes>
  );
}

export default App;
