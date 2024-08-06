const express = require("express");
const {
  createArticles,
  listArticles,
  deleteArticle,
  updateArticle,
  listOneArticleById,
} = require("../controllers/articleController");
const {
  articleValidationRules,
  validateArticles,
  singleArticleValidationRules,
  validateSingleArticle,
} = require("../middleware/articleValidators");

const router = express.Router();
router.get("/articles/:id", listOneArticleById);
router.get("/articles", listArticles);
router.post("/articles", articleValidationRules(), validateArticles, createArticles);
router.put("/articles/:id", singleArticleValidationRules(), validateSingleArticle, updateArticle);
router.delete("/articles/:id", deleteArticle);

module.exports = router;
