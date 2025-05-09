import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

const blogs = [
  {
    id: 3,
    title: "Cybersecurity: Protecting Your Digital Presence",
    content:
      "Cybersecurity is more important than ever in today's digital world. Learn how to safeguard your personal data from cyber threats, hackers, and phishing scams.",
    image: "https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg",
    comments: [
      { text: "Great tips for staying safe online!", avatar: avatars[0] },
      { text: "Cybersecurity should be a priority for everyone.", avatar: avatars[1] },
    ],
  },
  {
    id: 4,
    title: "The Future of Quantum Computing",
    content:
      "Quantum computing is set to revolutionize problem-solving in fields like cryptography and material science. Discover how it differs from classical computing and its potential applications.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    comments: [
      { text: "Quantum computing blows my mind!", avatar: avatars[0] },
      { text: "I wonder how long before it becomes mainstream.", avatar: avatars[2] },
    ],
  },
  {
    id: 5,
    title: "The Evolution of Web Development",
    content:
      "Web development has come a long way from static HTML pages to dynamic, interactive experiences. Learn about the latest trends, frameworks, and best practices in modern web development.",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg",
    comments: [
      { text: "React and Vue are game changers!", avatar: avatars[1] },
      { text: "Web development keeps evolving so fast!", avatar: avatars[2] },
    ],
  },
  {
    id: 6,
    title: "Cloud Computing: The Backbone of Modern Tech",
    content:
      "Cloud computing enables businesses and individuals to access powerful computing resources on demand. Learn about its benefits, models, and how it's transforming industries.",
    image: "https://images.pexels.com/photos/391302/pexels-photo-391302.jpeg",
    comments: [
      { text: "Cloud services have changed how we work.", avatar: avatars[0] },
      { text: "AWS vs Azure vs Google Cloud – which is best?", avatar: avatars[1] },
    ],
  },
  {
    id: 7,
    title: "The Role of Big Data in Business Decisions",
    content:
      "Big Data helps businesses make informed decisions by analyzing vast amounts of information. Learn how companies use data analytics to improve operations and customer experiences.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    comments: [
      { text: "Data is the new oil!", avatar: avatars[0] },
      { text: "I love working with data analytics.", avatar: avatars[2] },
    ],
  },
];


const Blog = ({ blog }) => {
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

export default function BlogPage() {
  const [waitingTime, setWaitingTime] = useState(0);
  const [waitingTime2, setWaitingTime2] = useState(0);

  const [no, setNo] = useState(0); // Use state for 'no'
  const [no2, setNo2] = useState(0); // Use state for 'no'

  const [btn_text , set_text ]  =useState("Get Link")
  const [btn_text2 , set_tex2 ]  =useState("Get Link")

  

  const bottomRef = useRef(null);

  const getLink1 = () => {
    setNo(prevNo => prevNo + 1); // Increment state correctly
    if(no==0){
      setWaitingTime(10); // Start the countdown
    }
    else{
      console.log("truee")
      scrollToBottom()

    }
  };
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const getLink2 = () => {
    setNo2(prevNo => prevNo + 1); // Increment state correctly
    if(no2==0){
      setWaitingTime2(10); // Start the countdown
    }
    else{
      console.log("truee")
    }
   
  };

  useEffect(() => {
    if (waitingTime > 0) {
      const timer = setTimeout(() => setWaitingTime(waitingTime - 1), 1000);
      return () => clearTimeout(timer);
    }
    
  }, [waitingTime]);

  useEffect(() => {
    if (waitingTime2 > 0) {
      const timer2 = setTimeout(() => setWaitingTime2(waitingTime2 - 1), 1000);
      return () => clearTimeout(timer2);
    }
    
  }, [waitingTime2]);
  useEffect(()=>{
    if(no>0){
      set_text("Get Link now")
    }    
  },[no])
  useEffect(()=>{
    if(no2>0){
      set_tex2("Get Link now")
    }    
  },[no2])
  return (
    <div className="container">
      <h1 className="title">Trending Blos</h1>
      <h4> We share insightful articles on [your niche] to inform, inspire, and connect readers. Join us on this journey of learning and discovery. Happy reading! 🚀</h4>
      <button 
        onClick={getLink1} 
        className="get-link" 
        disabled={waitingTime > 0}
      >
        {waitingTime > 0 ? `Wait ${waitingTime}s` : btn_text}
      </button>
      <div className="blog-container">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
      {
        no>1 && <button 
        onClick={getLink2} 
        className="get-link" 
        disabled={waitingTime > 0}
      >
        {waitingTime2 > 0 ? `Wait ${waitingTime2}s` : btn_text2}
      </button>
      }
      <h4 ref={bottomRef}> We share insightful articles on [your niche] to inform, inspire, and connect readers. Join us on this journey of learning and discovery. Happy reading! 🚀</h4>

    </div>
  );
}
