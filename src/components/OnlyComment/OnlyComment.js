import React, { useState, useEffect } from 'react';
import ShowOnlyComment from '../ShowOnlyComment/ShowOnlyComment';

const OnlyComment = (props) => {
    const postId = props.postId;
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <div>
             <h1>Comments :</h1>
            {
                comment.map(comment => <ShowOnlyComment comment={comment} ></ShowOnlyComment>  )
            }
                    
        </div>
    );
};

export default OnlyComment;