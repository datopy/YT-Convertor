import React from 'react';
import './App.css';
import gif from './gif.gif';

export function DownloadButtonDefault() {
    return (
        <div className='buttonDefault'>
            <p>Copy Youtube Link and Paste Here To Start</p>
            <img src={gif} alt='guide' />
        </div>
    )
}

export default DownloadButtonDefault
