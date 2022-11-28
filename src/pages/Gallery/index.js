import React from "react";
import Header from "../layout/Header";
import GalleryList from "./GalleryList";
import { GalleryProvider } from './GalleryContext';

function Gallery() {
  return (
    <GalleryProvider>
      <Header></Header>
      <div className="content gallery">
        <GalleryList></GalleryList>
      </div>
    </GalleryProvider>
  );
}

export default Gallery;