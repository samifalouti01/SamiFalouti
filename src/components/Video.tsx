
const Video = () => {
    return (
        <div className="flex flex-col items-center bg-white">
            <h2 className="text-2xl font-bold mb-4">AiSool Presentation</h2>
            <iframe 
                width="350" 
                height="200" 
                src="https://res.cloudinary.com/dgqpkdeld/video/upload/v1767700942/AiSool_w752mm.mp4" 
                title="AiSool Presentation"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>
        );
}

export default Video;