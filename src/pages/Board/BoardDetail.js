import React from "react";
import { BoardProvider } from './BoardContext';
import Header from "../layout/Header";
import BoardDetailContent from "./BoardDetailContent";

//{id, title, content}

function BoardDetail() {
  return (
    <BoardProvider>
        <Header></Header>
        <div className="content board">
            <div className="detail-wrap">
                <BoardDetailContent />
            </div>
        </div>
    </BoardProvider>
  );
}

export default BoardDetail;