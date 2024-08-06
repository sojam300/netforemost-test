const { body, validationResult } = require("express-validator");

const articleValidationRules = () => {
  return [
    body("").isArray().withMessage("Request body must be an array of articles."),
    body("*.author").isString().withMessage("Author must be a string"),
    body("*.title").isString().withMessage("Title must be a string"),
    body("*.description").isString().withMessage("Description must be a string"),
    body("*.url").isURL().withMessage("URL must be a valid URL"),
    body("*.urlToImage").isURL().withMessage("URL to Image must be a valid URL"),
    body("*.publishedAt").isISO8601().withMessage("PublishedAt must be a valid ISO8601 date"),
  ];
};

const validateArticles = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Validation error", errors: errors.array() });
  }
  next();
};

const singleArticleValidationRules = () => {
  return [
    body("author").isString().withMessage("Author must be a string"),
    body("title").isString().withMessage("Title must be a string"),
    body("description").isString().withMessage("Description must be a string"),
    body("url").isURL().withMessage("URL must be a valid URL"),
    body("urlToImage").isURL().withMessage("URL to Image must be a valid URL"),
    body("publishedAt").isISO8601().withMessage("PublishedAt must be a valid ISO8601 date"),
  ];
};

const validateSingleArticle = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Validation error", errors: errors.array() });
  }
  next();
};

module.exports = { articleValidationRules, singleArticleValidationRules, validateSingleArticle, validateArticles };
