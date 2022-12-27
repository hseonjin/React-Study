import React from "react";

const data = {
  kkomi: {
    name: "꼬미",
    description: "우리 첫 쨰",
  },
  miro: {
    name: "미로",
    description: "우리 둘 째",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
