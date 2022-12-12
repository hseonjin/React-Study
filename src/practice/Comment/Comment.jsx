import React from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRedius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLift: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
}

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
