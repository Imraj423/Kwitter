require("dotenv").config({ path: "variables.env" });

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const NewsAPI = require("newsapi");

const NewsFeed = express();

const pusher = new Pusher({
  NewsFeedId: process.env.PUSHER_NewsFeed_ID,
  key: process.env.PUSHER_NewsFeed_KEY,
  secret: process.env.PUSHER_NewsFeed_SECRET,
  cluster: process.env.PUSHER_NewsFeed_CLUSTER,
  encrypted: true
});

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const fetchNews = (searchTerm, pageNum) =>
  newsapi.v2.everything({
    q: searchTerm,
    language: "en",
    page: pageNum,
    pageSize: 5
  });

NewsFeed.use(cors());

function updateFeed(topic) {
  let counter = 2;
  setInterval(() => {
    fetchNews(topic, counter)
      .then(response => {
        pusher.trigger("news-channel", "update-news", {
          articles: response.articles
        });
        counter += 1;
      })
      .catch(error => console.log(error));
  }, 3000);
}

NewsFeed.get("/live", (req, res) => {
  const topic = "bitcoin";
  fetchNews(topic, 1)
    .then(response => {
      res.json(response.articles);
      updateFeed(topic);
    })
    .catch(error => console.log(error));
});

NewsFeed.set("port", process.env.PORT || 3000);
const server = NewsFeed.listen(NewsFeed.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
