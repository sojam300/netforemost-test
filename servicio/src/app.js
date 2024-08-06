const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const articleRoutes = require("./routes/articleRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", articleRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Service Runing on port: ${PORT}`);
});
