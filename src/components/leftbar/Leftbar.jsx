import { MdBookmarks, MdFeed } from "react-icons/md";
import "./leftbar.css";
import {
  FaBriefcase,
  FaFacebookMessenger,
  FaGraduationCap,
} from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { BsCalendarEvent, BsFillQuestionCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#4406b7" }}>
              <MdFeed className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Feed</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#9370DB" }}>
              <FaFacebookMessenger className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Chats</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#db0a0a" }}>
              <PiVideoFill className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Videos</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#956198" }}>
              <HiUserGroup className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Groups</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#9370DB" }}>
              <MdBookmarks className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Bookmarks</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#4406b7" }}>
              <BsFillQuestionCircleFill className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Questions</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#956198" }}>
              <FaBriefcase className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Jobs</span>
          </li>
          <li className="leftbarlistItem">
            <IconContext.Provider value={{ color: "#556791" }}>
              <BsCalendarEvent className="leftbarIcon" />
            </IconContext.Provider>
            <span className="leftbarlistItemText">Events</span>
          </li>
          <li className="leftbarlistItem">
            <FaGraduationCap className="leftbarIcon" />
            <span className="leftbarlistItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">See more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((data) => {
            return <CloseFriend key={data.id} user={data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
