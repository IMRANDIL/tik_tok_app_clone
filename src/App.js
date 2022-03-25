
import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';







function App() {

  const [videos, setVideos] = useState([]);



  useEffect(() => {


    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))



  }, [videos])




  return (
    <div className="app">


      <div className="app__videos">
        {videos.map(({ url, channel, description, song, messages, likes, shares }) => (
          <Video

            url={url}
            channel={channel}
            description={description}
            song={song}
            messages={messages}
            likes={likes}
            shares={shares}



          />
        ))}



        {/* <Video
          url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          channel='ImranDil'
          description='This works...!'
          song='The Lovely melody'
          likes={123}
          messages={400}
          shares={235}

        />

        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
