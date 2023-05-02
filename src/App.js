import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const getVideos = async () => {
    const videos = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos
    &key=AIzaSyBSfmJfRWOmAyKNwK5ufS-CO8K4vSC8RUk`,
      {},
      { withCredentials: true }
    );

    if (videos) {
      console.log(videos);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="text-3xl font-bold underline">
      <h1>Hello Youtube</h1>
    </div>
  );
};

export default App;
