import { Link } from "react-router-dom";
import img1 from "./assets/images/img1.png"
import img2 from "./assets/images/img2.png"
import img3 from "./assets/images/img3.png"


export const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
  ];
  
 export const blogs = [
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

  export const Links = [
    { id: 1, post: 1, img: img1 , link:"13q37C-O_grUC9vHN86a2-A" },
    { id: 2, post: 2, img: img2 , link:"1YN007-8z1BrpTltxCpGmOw" },
    { id: 3, post: 3, img: img3 , link:"1fsenGBpV_1xQU0fN8d4zlw" },


  ];
  