import React from 'react';
import { useNavigate } from "react-router-dom";

function Header(){
    let navigate = useNavigate();

    // const history = createBrowserHistory();

    function goHome() {
      navigate("../../");
    }

    function goBack() {
		navigate(-1);
	}
  return (
    <div className="fixed-top">
        {/* <button className="btn-home" onClick={goHome}>🏠</button> */}
        <button className="btn-back" onClick={goBack}>
            <img className="back" src={require('../../assets/images/ico_back.png')} alt="back" />
        </button>
        <button className="btn-home" onClick={goHome}>
            <img className="sally" src={require('../../assets/images/ico_sally.png')} alt="sally icon" />
        </button>
    </div>
  )
}

export default Header;
