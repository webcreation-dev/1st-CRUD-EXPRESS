const express = require('express');
const { connectDatabase } = require('./config/database');
const dotenv = require('dotenv').config();
const app = express();
const port = 3000;

// Connexion à la base de données 

connectDatabase(); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});