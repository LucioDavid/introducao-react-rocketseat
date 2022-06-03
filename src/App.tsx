import { useState } from "react";
import { Tweet } from "./components/Tweet"
import { AppRoutes } from "./Routes";

import './App.css';

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Tweet 5']);
  }

  return (
    <>
      <AppRoutes />
      {/* {tweets.map(tweet => <Tweet text={tweet} />)}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#FFF'
        }}
      >
        Adicionar tweet
      </button> */}
    </>
  );
}

export default App
