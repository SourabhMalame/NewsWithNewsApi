import React, { useState, useEffect } from "react";

const News = () => {
  const [topic, setTopic] = useState("health");
  const [author, setAuthor] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    try {
      let url = `https://newsapi.org/v2/everything?q=${topic}&page=${page}&pageSize=10&apiKey=afdc91c850e048f1990c75ae3f8270d7`;
      if (author) {
        url += `&author=${author}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const data = await response.json();
      setNews(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [topic, author, page]);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    setPage(1); // Reset to first page on topic change
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < Math.ceil(totalResults / 10)) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="div col-5 m-3">
        <select
          className="form-select"
          aria-label="Select Category"
          onChange={handleTopicChange}
        >
          <option selected>Trending</option>
          <option value="world">World</option>
          <option value="politics">Politics</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <div className="main d-flex flex-wrap mx-auto">
        {news.map((item, index) => (
          <div key={index} className="card col-lg-5 col-md-6 m-2 ">
            <div className="card-header">
              <p>{item.title}</p>
            </div>
            <div className="card-body">
              <p>Published At: {item.publishedAt}</p>
              <img
                className="img-fluid"
                src={item.urlToImage}
                alt="News Images"
              />
              <p>{item.content}</p>
            </div>
            <div className="card-footer">
              <p>
                <a href={item.url} target="_blank">
                  Click Here To See More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls text-center m-3">
        <button
          className="btn btn-primary m-2"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="btn btn-primary m-2"
          onClick={handleNextPage}
          disabled={page >= Math.ceil(totalResults / 10)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default News;
