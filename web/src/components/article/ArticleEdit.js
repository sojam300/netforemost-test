import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ArticleEdit.css";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/articles/${id}`);
        const data = response.data;

        const formattedDate = new Date(data.publishedAt).toISOString().slice(0, 16);
        setArticle({ ...data, publishedAt: formattedDate });
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/articles/${id}`, article);
      alert("Article Updated");
      navigate("/");
    } catch (error) {
      alert("Error updating article");
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
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditArticle;
