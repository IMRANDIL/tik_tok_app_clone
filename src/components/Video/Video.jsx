import React, { useRef, useState } from 'react'

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
            <video className='video__player' onClick={onVideoPress} loop ref={videoRef} src="https://vod-progressive.akamaized.net/exp=1648192187~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2436%2F18%2F462183602%2F2046352575.mp4~hmac=0bbf7a6401db6943a092de8ac4e6fba156e7f2585c7bc4b3b95ee4a623a13a48/vimeo-prod-skyfire-std-us/01/2436/18/462183602/2046352575.mp4?filename=pexels-peter-billington-5454316.mp4" height='100%'></video>

            {/* Video Footer */}

            {/* Video sidebar */}
        </div>
    )
}

export default Video