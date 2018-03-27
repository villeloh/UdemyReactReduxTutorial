import React from 'react';
import VideoItem from './video_item';

const VideoList = ({videos, onVideoSelect}) => {

    if (!videos) {
        return <div>Loading...</div>;
    }

    const videoItems = videos.map(video => {

        return (<VideoItem 
            key={video.etag} 
            video={video}
            onVideoSelect={onVideoSelect}
            />);
    });

    return(
        <ul className="col-md-4 list-group">
        {videoItems}            
        </ul>
    );
};

export default VideoList;
