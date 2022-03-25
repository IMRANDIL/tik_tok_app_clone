import React, { useState } from 'react'
import './VideoSidebar.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';







const VideoSidebar = ({ likes, shares, messages }) => {

    const [like, setLike] = useState(false)



    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__selection">
                {like ? <FavoriteIcon fontSize='large' style={{ color: 'red' }} onClick={() => setLike(false)} /> : <FavoriteBorderIcon fontSize='large' onClick={() => setLike(true)} />}

                <p>{like ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__selection">
                <MessageIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__selection">
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar