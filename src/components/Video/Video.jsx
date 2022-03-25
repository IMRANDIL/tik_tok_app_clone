import React, { useRef, useState } from 'react'
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import VideoFooter from './Footer/VideoFooter';

import './Video.css'









const Video = ({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) => {


    const [play, setPlay] = useState(false);


    const videoRef = useRef(null);


    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false)
        } else {
            videoRef.current.play();
            setPlay(true)
        }

    }



    return (
        <div className='video'>
            <video className='video__player' onClick={onVideoPress} loop ref={videoRef} src={url} ></video>

            {/* Video Footer */}
            <VideoFooter channel={channel} description={description} song={song} />
            {/* Video sidebar */}
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video