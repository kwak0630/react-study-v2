import React from "react";
import Header from "../layout/Header";
import { BoardProvider } from './BoardContext';
import BoardCreateContent from './BoardCreateContent';

function BoardCreate() {
  return (
    <BoardProvider>
      <Header></Header>
      <div className="content board">
        <BoardCreateContent />
      </div>
    </BoardProvider>
  );
}

export default BoardCreate;