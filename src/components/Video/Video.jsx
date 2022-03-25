import React, { useRef, useState } from 'react'
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import VideoFooter from './Footer/VideoFooter';

import './Video.css'









const Video = () => {


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
            <video className='video__player' onClick={onVideoPress} loop ref={videoRef} src="https://vod-progressive.akamaized.net/exp=1648212721~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2812%2F20%2F514062274%2F2380845364.mp4~hmac=e59d82358ab2707044b3551e09d148f6d6f199b5b656641c732cb49e27766824/vimeo-prod-skyfire-std-us/01/2812/20/514062274/2380845364.mp4?filename=pexels-cottonbro-6869572.mp4" ></video>

            {/* Video Footer */}
            <VideoFooter channel='AliImranAdil' description='Checkout this man' song='aasha' />
            {/* Video sidebar */}
            <VideoSidebar likes={1144} messages={652} shares={300} />
        </div>
    )
}

export default Video