import React from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const navigate = useNavigate();

  // 뒤로 가기
  const goBack = () => {
    navigate(-1);
  };

  // 홈으로 가기
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
