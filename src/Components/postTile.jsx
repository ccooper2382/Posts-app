import React from 'react';

function PostTile({id, title, body}) {
    return (
        <div>
            <div className="postId">{id}</div>
            <div className="postTitle">{title}</div>
            <div className="postBody">{body}</div>

        </div>
    );
}

export default PostTile;