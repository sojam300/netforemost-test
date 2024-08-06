import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./ArticleEdit.css";

const CreateArticle = () => {
  const [article, setArticle] = useState({
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newArticle = [
        {
          ...article,
          publishedAt: new Date(article.publishedAt).toISOString(),
        },
      ];
      await axios.post("/articles", newArticle);
      alert("Article Created");
      navigate("/");
    } catch (error) {
      alert("Error creating article");
    }
  };

  return (
    <div className="edit-article-container">
      <form className="edit-article-form" onSubmit={handleSubmit}>
        <label>
          Author:
          <input type="text" name="author" value={article.author} onChange={handleChange} required />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={article.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={article.description} onChange={handleChange} required />
        </label>
        <label>
          URL:
          <input type="url" name="url" value={article.url} onChange={handleChange} required />
        </label>
        <label>
          URL to Image:
          <input type="url" name="urlToImage" value={article.urlToImage} onChange={handleChange} required />
        </label>
        <label>
          Published At:
          <input
            type="datetime-local"
            name="publishedAt"
            value={article.publishedAt}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticle;
