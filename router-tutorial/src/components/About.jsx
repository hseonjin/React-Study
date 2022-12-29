import React from "react";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";

const About = ({ location }) => {
  const query = qs.parse(useLocation, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  const Navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>About, 웹 사이트를 소개하는 페이지</p>
      <p>리액트 라우터 기초 실습 예제 프로젝트</p>
      {showDetail && <p>detail 값은 true로 설정</p>}
      <button onClick={() => Navigate("/")}>home으로 이동</button>
    </div>
  );
};

export default About;
