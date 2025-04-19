### Catatan Saya

Query untuk MostLikeNews
SELECT COUNT(newsId) AS like_count, news.id_news, news.title, news.image, news.created_at, user.name FROM `like`
INNER JOIN news ON news.id_news = like.newsId
INNER JOIN user ON news.authorId = user.id_user
GROUP BY newsId
ORDER BY like_count DESC;
