import React from 'react';

const ShowPicture = (props) => {
    const {flag} = props.picture;
    return (
        <div>
            <img src={flag} alt=""/>
        </div>
    );
};

export default ShowPicture;