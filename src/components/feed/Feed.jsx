import { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${API_BASE_URL}/posts/profile/` + username)
        : await axios.get(`${API_BASE_URL}/posts/timeline/` + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((data) => {
          return <Post key={data._id} post={data} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
