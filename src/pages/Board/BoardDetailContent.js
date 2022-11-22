import React from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useBoardDispatch } from './BoardContext';

function BoardDetailContent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  // const items = location.state;
  const title = location.state.title;
  const content = location.state.content;

  const dispatch = useBoardDispatch();
  const onRemove = () => dispatch({ type: 'REMOVE', id })

  // console.log(items)

  // // 삭제
  // const [setBoardItems] = useState("");
  const onDelete = () => {
    onRemove();
    navigate(-1);
    
    // const deleteItem = items.id !== id
    // console.log(deleteItem)
    // setBoardItems(deleteItem);
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="btn-box">
        {/* <button
        >
        <img className="btn-write" src={require('../assets/images/ico_write.png')} alt="write icon" />
        </button> */}
        <button 
          onClick={() => {
            if (window.confirm(`삭제하시겠습니까?`)) {
              // onDelete();
              onDelete(id)
            }
          }}
        >
          <img className="btn-delete" src={require('../../assets/images/ico_delete.png')} alt="delete icon" />
        </button>
        {/* <button onClick={() => onDelete(id)}><img className="btn-delete" src={require('../assets/images/ico_delete.png')} alt="delete icon" /></button> */}
      </div>
      <div className="content">
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

export default BoardDetailContent;