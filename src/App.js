import React, { useEffect, useState } from 'react';
import './App.css';
import { Download } from './DownloadButton'
import { DownloadButtonDefault } from './DownloadButtonDefault'

function App() {
  const [videoUrl, setVideoUrl] = useState("")
  const [id, setId] = useState("")

  useEffect(() => {
    const id = videoUrl.replace('https://www.youtube.com/watch?v=', '')
    setId(id)
  }, [videoUrl])

  return (
    <div className="app">
      <div className="app_navBar">
        <h1>Youtube Converter</h1>
      </div>

      <div className="app_linkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
          onChange={(e) => setVideoUrl(e.target.value)} 
          value={videoUrl} 
          type="text" 
          placeholder="Paste Your Youtube Link" />
        </form>
      </div>

      <div className='download_button'>
        { videoUrl === "" ? 
        <DownloadButtonDefault /> :
        <div>
          {videoUrl.startsWith('https://youtu.be/') || videoUrl.startsWith('https://www.youtube.com/watch?v=') ? (
            <div>
              <Download id={id} type="mp3" />
              <Download id={id} type="videos" />
            </div>) : 
            <h2>Please Insert Valid Youtube Link</h2>
            }
          
        </div> }
      </div>

    </div>
  );
}

export default App;
