import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // create video embed url
  const url =`https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videoDetail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        {/*get title of video from props*/}
        <div>{video.snippet.title}</div>
        {/*get description of video from props*/}
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;