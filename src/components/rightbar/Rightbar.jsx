import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/gifty.webp"
            alt="birthday"
          />
          <span className="birthdayText">
            <b>Lawrence</b> and <b>12 others</b> have birthdays today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpeg" alt="Ad" />
        <div className="rightbarTitle">Online Friends</div>
        <ul className="rightbarFriendList">
          {Users.map((data) => {
            return <Online key={data.id} user={data} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Lives in: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/angel.jpg`}
              alt="user"
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">Angel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/godwin.jpg`}
              alt="user"
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">Godwin</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/lole.jpg`}
              alt="user"
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">Lawrence</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
