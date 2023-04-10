import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    EmailIcon,
    EmailShareButton,
    LineShareButton,
    LinkedinIcon
} from 'react-share';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
}
const ModalContent = ({ id }) => {
    const [videoId, setVideoId] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
  const fetchVideo = async () => { 
      const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1160cac5ff26e1cc795d5733856ce01c`);
      console.log(data);
      setVideoId(data?.results[0]?.key);
      setYoutubeLink(`https://www.youtube.com/watch?v=${videoId}`);
     }
    useEffect(() => { 
        fetchVideo()
    }, []) 

    console.log(videoId);
    return (
        <div style={{
             display: 'flex',
            justifyContent: 'center',
          alignItems: 'center',
            alignSelf: 'center',
            flexDirection:'column'
          
        }}>
            <YouTube videoId={videoId} opts={opts} />
            <div  style={{
             display: 'flex',
            justifyContent: 'center',
          alignItems: 'center',
            alignSelf: 'center',
            gap:'20px'
          
        }}>
                <FacebookShareButton url={ youtubeLink}>
                    <FacebookIcon size={32} round={ true} />
                </FacebookShareButton>
                <TelegramShareButton url={ youtubeLink}>
                    <TelegramIcon size={32} round={ true}/>
                </TelegramShareButton>

                <EmailShareButton  url={ youtubeLink}>
                <EmailIcon size={32} round={ true}/>
                </EmailShareButton>

                <LineShareButton  url={ youtubeLink}>
                <LinkedinIcon size={32} round={ true} />
               </LineShareButton>
               
            </div>
        </div>
    );
}

export default ModalContent