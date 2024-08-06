const Article = require("../models/articleModel");

const createArticles = async (req, res) => {
  try {
    const articlesArray = req.body;
    await Article.insertMany(articlesArray);
    res.status(201).json({ message: "Articles created success" });
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error: error.toString() });
  }
};
const listArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
};
const listOneArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const findArticle = await Article.findById(id);

    if (!findArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(findArticle);
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error });
  }
};
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error });
  }
};
module.exports = { createArticles, listArticles, updateArticle, deleteArticle, listOneArticleById };
