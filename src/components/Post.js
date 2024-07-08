import {
  faComment,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import Avatar from "./Avatar";
import InputOptions from "./InputOptions";
import "./Post.css";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar />
        <div className="post-info">
          <h2>Fiza Joiya</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post-body">
        <p>Message goes here</p>
      </div>

      <div className="post-buttons">
        <InputOptions Icon={faThumbsUp} title="Like" color="text-stone-500" />
        <InputOptions Icon={faComment} title="Comment" color="text-stone-500" />
        <InputOptions Icon={faRepeat} title="Repost" color="text-stone-500" />
        <InputOptions
          Icon={faPaperPlane}
          title="Repost"
          color="text-stone-500"
        />
      </div>
    </div>
  );
}

export default Post;
