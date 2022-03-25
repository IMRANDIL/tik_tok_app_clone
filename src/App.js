
import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="app">


      <div className="app__videos">
        <Video
          url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          channel='ImranDil'
          description='This works...!'
          song='The Lovely melody'
          likes={123}
          messages={400}
          shares={235}

        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
