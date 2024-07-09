import {
  faComment,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import Avatar from "./Avatar";
import InputOptions from "./InputOptions";
import "./Post.css";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post-header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
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
});

export default Post;
