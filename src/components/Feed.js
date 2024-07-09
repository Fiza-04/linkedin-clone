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
import { db } from "./Firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc")); // Correctly query the collection with ordering
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return unsubscribe; // Unsubscribe from snapshot listener on unmount
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
