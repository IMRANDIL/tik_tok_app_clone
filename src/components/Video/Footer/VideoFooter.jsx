import React from 'react'
import './VideoFooter.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';






const VideoFooter = () => {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h3>@AliImranAdil</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className='videoFooter__icon' />
                    <Ticker mode='smooth'>
                        {
                            ({ index }) => (
                                <>

                                    <p>
                                        Yo what's up
                                    </p>

                                </>
                            )



                        }
                    </Ticker>
                </div>

            </div>
            <img className='videoFooter__logo' src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter