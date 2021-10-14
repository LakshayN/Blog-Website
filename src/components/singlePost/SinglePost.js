import "./SinglePost.css";
import React from "react";
import myImg from "../Image/saitama.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={myImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon" class="far fa-edit"></i>
            <i className="singlePostIcon" class="fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Lakshay</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dicta
          nesciunt voluptatibus impedit sapiente recusandae distinctio vel neque
          similique quo ipsam rerum, ab excepturi asperiores quos odio quibusdam
          sequi repudiandae. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Esse dicta nesciunt voluptatibus impedit sapiente recusandae
          distinctio vel neque similique quo ipsam rerum, ab excepturi
          asperiores quos odio quibusdam sequi repudiandae. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Esse dicta nesciunt
          voluptatibus impedit sapiente recusandae distinctio vel neque
          similique quo ipsam rerum, ab excepturi asperiores quos odio quibusdam
          sequi repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Totam voluptate necessitatibus qui ipsam illum, deleniti veniam
          facere cumque eaque suscipit non, dignissimos maxime odit. Dolore
          excepturi quia doloribus non fuga? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Atque veritatis sequi consequuntur
          soluta, beatae, delectus pariatur possimus, aspernatur commodi
          voluptatibus ea tempora earum! Nostrum sapiente dolorum deserunt
          necessitatibus, quisquam sunt?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

//49:41
