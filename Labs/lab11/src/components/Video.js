import { useEffect, useRef, useState } from 'react';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (playing) {
      video.play();
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <div>
      <h1>Video Player</h1>
      <video width={512} ref={videoRef} loop>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <button type="button" onClick={() => setPlaying((prev) => !prev)}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
