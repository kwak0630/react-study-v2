import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import { BoardProvider } from './BoardContext';
import BoardList from "./BoardList";

function Board() {
  return (
    <BoardProvider>
      <Header></Header>
      <div className="content board">
          <BoardList></BoardList>
          <Link to={`BoardCreate`} className="btn-add">추가</Link>
      </div>
    </BoardProvider>
  );
}

export default Board;