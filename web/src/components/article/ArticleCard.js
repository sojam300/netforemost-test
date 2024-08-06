import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article, onDelete }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.open(article.url, "_blank");
  };
  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit-article/${article._id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(article._id);
  };
  return (
    <div className="article-card" onClick={handleClick}>
      <img className="article-card-image" src={article.urlToImage} alt={article.title} />
      <div className="article-card-content">
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-author">By: {article.author}</p>
        <p className="article-card-description">{article.description}</p>
        <div className="article-card-buttons">
          <button className="article-card-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
