import React from "react";
import { GalleryProvider } from './GalleryContext';
import Header from "../layout/Header";
import GalleryDetailContent from "./GalleryDetailContent";

//{id, title, content}

function GalleryDetail() {
  return (
    <GalleryProvider>
        <Header></Header>
        <div className="content gallery">
            <div className="detail-wrap">
                <GalleryDetailContent />
            </div>
        </div>
    </GalleryProvider>
  );
}

export default GalleryDetail;