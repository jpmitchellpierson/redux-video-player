import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video (ES5 equivalent to {video} above)
  const imageUrl = video.snippet.thumbnails.default.url;

  return( 
    <li onClick={() => onVideoSelect(video)} className="listGroupItem">
      <div className="videoList media">
        <div className="mediaLeft">
          <img className="mediaObject" src={imageUrl}/>
        </div>

        <div className="mediaBody">
          <div className="mediaHeading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;