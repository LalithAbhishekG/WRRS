import React from 'react';
import Bannerbg from '../../Assets/Shared/Banner.MP4';

export default function Banner({ heading }) {
  return (
    <div className="w-full h-80">
      {/* Video Background */}
      <video
        src={Bannerbg}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover z-0 relative"
      />

<div className="md:-mt-21 -mt-20 h-auto w-auto flex">
  <div className="z-10 bg-pink-900/70 text-white px-20 py-6 
                  [clip-path:polygon(0%_0%,calc(100%-40px)_0%,100%_100%,0%_100%)]">
    <h1 className="md:text-3xl text-2xl">{heading}</h1>
  </div>
</div>


    </div>
  );
}
