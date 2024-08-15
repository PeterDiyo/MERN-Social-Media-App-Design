import "./topbar.css";
import React, { useContext } from "react";
import { FaFacebookMessenger, FaUserCircle } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Diyolinker</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input placeholder="Search on Diyolinker" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <IoHomeOutline />
          </span>
          <span className="topbarLink">
            <RiTimeLine />
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUserCircle className="badge" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaFacebookMessenger className="badge" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <GrNotification className="badge" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
