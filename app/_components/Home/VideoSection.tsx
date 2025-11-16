import React from "react";

export default function VideoSection() {
  return (
    <div className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-xl">
          <video
            className="w-full h-auto"
            src="/roovtectvideo.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
