import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Posts } from "./components/Posts";
import Pagination from "./components/Pagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pagenumber) => setCurrentPage(pagenumber);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-primary font-weight-bold">Pagination</h1>
        <p>Using reactjs and bootstrap...</p>
      </div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalposts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
