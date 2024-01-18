import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Post({ Post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === Post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === Post.userId)[0].username}
            </span>
            <span className="postDate">{Post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {Post?.desc}</span>
          <img className="postImg" src={Post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postliekCounter">{Post.like}people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{Post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
