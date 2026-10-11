import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>❤️ Likes: {likes}</p>

      <button onClick={handleLike}>
        Like ❤️
      </button>
    </div>
  );
}

export default LikeButton;