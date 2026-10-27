import washworld_video from "/video/washworld.mp4";

export default function ProjectVideos(){

    return(
         <video
          src="/video/washworld.mp4"
          controls
          muted
          playsInline
          style={{ width: "100%", maxWidth: 800 }}
      />
    );

}