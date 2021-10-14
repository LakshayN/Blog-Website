import React from "react";
import "./Post.css";
import myImg from "../Image/saitama.jpg";
const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={myImg} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi
        dignissimos eius alias sint culpa vero unde sequi voluptate ex cum saepe
        delectus, laborum quos ipsum voluptas adipisci, enim ratione!
      </p>
    </div>
  );
};

export default Post;
