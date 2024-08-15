import { MdEmojiEmotions, MdPermMedia } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;

      try {
        await axios.post(`${API_BASE_URL}/upload`, data);
      } catch (err) {
        console.log(
          "Error during file upload:",
          err.response?.data || err.message
        );
      }
    }

    try {
      await axios.post(`${API_BASE_URL}/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(
        "Error during post creation:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="profile"
          />
          <input
            placeholder={"What's on your mind, " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <IconContext.Provider value={{ color: "#58a66b" }}>
                <MdPermMedia className="shareIcon" />
              </IconContext.Provider>
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <IconContext.Provider value={{ color: "#4169E1" }}>
                <FaUserTag className="shareIcon" />
              </IconContext.Provider>
              <span className="shareOptionText">Tag people</span>
            </div>
            <div className="shareOption">
              <IconContext.Provider value={{ color: "#e65151" }}>
                <FaLocationDot className="shareIcon" />
              </IconContext.Provider>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <IconContext.Provider value={{ color: "goldenrod" }}>
                <MdEmojiEmotions className="shareIcon" />
              </IconContext.Provider>
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
