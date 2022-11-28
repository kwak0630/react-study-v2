import React from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

function GalleryDetailContent() {
  const { id } = useParams();

  const location = useLocation();
  // const items = location.state;
  const title = location.state.title;
  const content = location.state.content;
  const imgSrc = location.state.imgSrc;

  console.log(id)
  // console.log(items)

  return (
    <>
      <h2>{title}</h2>
      <div className="content">
        <div className="img-box">
            <img src={imgSrc} alt="galley-img" />
        </div>
        {content.split("<br/>").map((line, index) => { //this.props.data.content: 내용
        return (
          <p key={index}>
            {line}
            <br />
          </p>
        );
        })}
      </div>
    </>
  );
}

export default GalleryDetailContent;