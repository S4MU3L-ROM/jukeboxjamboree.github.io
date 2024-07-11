import React from 'react';

const Video = () => (
    <div className="video relative h-[20rem] overflow-hidden">
        <div className="overlay absolute inset-0 bg-gradient-to-r from-purple-dark to-teal flex items-center justify-center text-white">
            <div>
                <h2 className="text-7xl">Jukebox Jamboree</h2>
                <p className="text-white text-2xl p-2">Julio 2024, Bogotá</p>
            </div>
        </div>
        <video className="w-full" autoPlay muted loop>
            <source src="video/dj.mp4" type="video/mp4"/>
            <source src="video/dj.ogv" type="video/ogg"/>
            <source src="video/dj.webm" type="video/webm"/>
        </video>
    </div>
);

export default Video;
