import React, { useState, useEffect } from 'react';
import ShowPicture from '../ShowPicture/ShowPicture';

const CommentPicture = () => {
    const [picture, setPicture] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setPicture(data[44]))
        console.log(picture);
    },[])
    return (
        <div>
            <ShowPicture picture={picture}></ShowPicture>          
        </div>
    );
};

export default CommentPicture;