import React from "react";
import { Link } from "react-router-dom";
import { useGalleryState } from './GalleryContext';

import defaultImg from "../../assets/images/gallery/no-photo.png";

function GalleryList() {
  const gallerydItems = useGalleryState();

  const onErrorImg = (e) => {
    e.target.src = defaultImg;
  }
  return (
    <>
      <div className='title-wrap'>
        <h2>📸 Gallery</h2>
        <div className='side'>
            총<em>{gallerydItems.length}</em>개
        </div>
      </div>

      <ul className="gallery-list">
        {gallerydItems.map(({id, title, content, imgSrc}) =>
          <li key={id}>
            <Link to={`GalleryDetail/${id}`} state={{ title: title, content: content, imgSrc: imgSrc }}>
              <div className="gallery-item">
                {/* <span className="num">{id}</span> */}
                <div className="thumb">
                  {/* {imgSrc && <img src={imgSrc} alt="gally-img" onError={onErrorImg} />} */}
                  {/* <div className="thumb-img" style={{background: `url(${imgSrc})`}}>

                  </div> */}
                  <img src={imgSrc} alt="gally-img" onError={onErrorImg} />
                </div>
              
              </div>
            </Link>                    
          </li>
          )}
      </ul>

    </>
  );
}

export default GalleryList;