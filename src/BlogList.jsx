import { useState } from "react";
import { avatars } from "./data";
import AdBanner from "./AdBanner";

export const Blog = ({ blog }) => {
    const [comments, setComments] = useState(blog.comments);
    const [newComment, setNewComment] = useState("");
  
    const addComment = () => {
      if (newComment.trim() !== "") {
        setComments([...comments, { text: newComment, avatar: avatars[Math.floor(Math.random() * avatars.length)] }]);
        setNewComment("");
      }
    };
    
  
  
    return (
      <div className="blog-card">
        <AdBanner/>
        <img src={blog.image} alt="Blog" className="blog-image" />
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
  
        <h3>Comments:</h3>
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment">
              <img src={comment.avatar} alt="Avatar" className="comment-avatar" />
              <span className="comment-text">{comment.text}</span>
            </li>
          ))}
        </ul>
  
        <div className="comment-box">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button onClick={addComment} className="comment-button">Post</button>
        </div>
      </div>
    );
  };