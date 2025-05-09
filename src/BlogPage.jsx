import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

import { blogs } from "./data";
import { Blog } from "./BlogList";
import AdBanner from "./AdBanner";
import AdBanner2 from "./AdBAnner2";
export default function BlogPage() {
    const [waitingTime, setWaitingTime] = useState(0);
    const [waitingTime2, setWaitingTime2] = useState(0);
  
    const [no, setNo] = useState(0); // Use state for 'no'
    const [no2, setNo2] = useState(0); // Use state for 'no'
  
    const [btn_text , set_text ]  =useState("Get Link")
    const [btn_text2 , set_tex2 ]  =useState("Get Link")
  
    
  
    const bottomRef = useRef(null);
    const { slug } = useParams();
  
    const getLink1 = () => {
      setNo(prevNo => prevNo + 1); // Increment state correctly
      if(no==0){
        setWaitingTime(10); // Start the countdown
       window.open("https://www.profitableratecpm.com/hczeeyptv4?key=f333c334d5e872a59597ad21cbc5eb03", "_blank");
      }
      else{
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
       window.open("https://www.profitableratecpm.com/r2q8aedc?key=eeeac4aeb95f9d7da1b7b8d27de20066","_blank");
      }
      else{
        console.log(slug)
        window.open( "https://1024terabox.com/s/" + slug, "_blank");



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
        <AdBanner/>
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
                {/* <AdBanner2/> */}

        <h4 ref={bottomRef}> We share insightful articles on [your niche] to inform, inspire, and connect readers. Join us on this journey of learning and discovery. Happy reading! 🚀</h4>
        
      </div>
    );
  }