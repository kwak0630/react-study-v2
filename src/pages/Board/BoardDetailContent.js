import React, {useEffect} from "react";
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
  // const onRemove = () => dispatch({ type: 'REMOVE', id })

  console.log(id)
  // console.log(items)
  // // 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  
    navigate(-1);
  };

  useEffect(() => {

  });


  // 수정
  const onEdit = () => {
    alert("작업 중")
  }

  return (
    <>
      <h2>{title}</h2>
      <div className="btn-box">
        <button
          onClick={onEdit}
        >
          <img className="btn-write" src={require('../../assets/images/ico_write.png')} alt="write icon" />
        </button>
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