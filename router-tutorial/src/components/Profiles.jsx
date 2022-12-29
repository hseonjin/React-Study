import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./withRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/kkomi"
            style={({ isActive }) => ({ color: isActive ? "black" : "red" })}
          >
            꼬미
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/miro">miro</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>사용자를 선택해 주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
