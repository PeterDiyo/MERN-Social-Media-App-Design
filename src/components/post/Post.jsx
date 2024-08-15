import { TfiMoreAlt } from "react-icons/tfi";
import "./post.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${API_BASE_URL}/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`${API_BASE_URL}/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt="profile"
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">
              <TimeAgo date={post.createdAt} />
            </span>
          </div>
          <div className="postTopRight">
            <TfiMoreAlt />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && (
            <img className="postImg" src={`${PF}${post.img}`} alt="post" />
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.jpeg`}
              onClick={likeHandler}
              alt="like"
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt="like"
            />
            <div className="postLikeCounter">{like} people like this</div>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
