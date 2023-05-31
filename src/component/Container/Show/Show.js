import React from 'react';
import "./Show.css";

const Show = () => {
    return (
        <div className='video_section'>
        <h1>NOTRE FILM INSTITUTIONNEL</h1>
            <div className='video'>
                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/MoRqD4xoaK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </div>
        
        </div>
    );
};

export default Show;