const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors = require('cors');

mongoose.connect("mongodb+srv://blaine:4131@cluster0.ufesskg.mongodb.net/forum-database");

const databaseSchema = new Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', databaseSchema);

app.use(express.json());
app.use(cors());

app.post('/createPost', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content
  });

  Post.find().then(PostFind => {
    var allData = PostFind;

    return res.json({ allData });
  });
});

server.listen(3001);