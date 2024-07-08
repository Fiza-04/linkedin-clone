import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Feed.css";
import InputOptions from "./InputOptions";
import {
  faCalendar,
  faImage,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "./firebase.js";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Fiza Joiya",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <FontAwesomeIcon icon={faPen} className="pt-1" />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post, try writing with AI"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed-input-options">
          <InputOptions Icon={faImage} title="Media" color="text-blue-500" />
          <InputOptions
            Icon={faCalendar}
            title="Event"
            color="text-yellow-600"
          />
          <InputOptions
            Icon={faNewspaper}
            title="Write article"
            color="text-red-500"
          />
        </div>
      </div>
      {post.map((post) => {
        <Post />;
      })}
      <Post
        name="Fiza Joiya"
        description="This is a test"
        message="WOW this worked"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
