import React from "react";
import Header from "../layout/Header";
import { BoardProvider } from './BoardContext';
import BoardList from "./BoardList";


function Board() {
    // const boardList = useContext(BoardStateContext);
    // const [data, setData] = useState([]);

  return (
    <BoardProvider>
        <Header></Header>
        <div className="content board">
            <BoardList></BoardList>
        </div>
    </BoardProvider>
  );
}

export default Board;