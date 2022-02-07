import React from 'react';
import './App.css'


export function Download({ id, type }) {
    return (
        <div className="download"> 
            <h2>Download {type === 'mp3' ? 'Music' : 'Video'} </h2>
            <iframe
            title='link'
            className='button-api-frame'
            src={`https://api.vevioz.com/@api/button/${type}/${id}`}>
            </iframe>
        </div>
    )
}
