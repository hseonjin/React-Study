import React from "react";
import Comment from './Comment';

const comments = [
    { 
        name: "꼬미",
        comment: "꼬미에요",
    },
    {
        name: "미로",
        comment: "미로에요",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}

            {/* <Comment name={"꼬미"} comment={"꼬미에요"}/>
            <Comment name={"미로"} comment={"미로에요"}/> */}
        </div>
    );
}

export default CommentList;