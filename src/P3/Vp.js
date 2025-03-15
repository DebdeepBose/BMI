import { useEffect, useRef } from "react";

function VideoPlayer() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = false; 
            video.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }, []);

    return <video ref={videoRef} src="BA.mp4" controls loop autoPlay />;
}

export default VideoPlayer;
