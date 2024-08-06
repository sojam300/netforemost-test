import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/articles/${id}`);
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="article-list">
      <div className="new-article-container">
        <h2>Articles</h2>
        <Link to="/create" className="new-article-button">
          Create New Article
        </Link>
      </div>
      <div className="article-list-container">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
