import { useLoading } from "./LoadingContext";


export default function LoadingVideo() {
    const { isLoading, handleVideoEnd } = useLoading();

    return (
        <>
            {isLoading && (
                <video
                    onEnded={handleVideoEnd}
                    className="w-screen h-screen object-fit 2xl:object-cover"
                    muted={true}
                    autoPlay={true}
                    playsInline={true}
                >
                    <source src="/Loading.mp4" />
                </video>
            )}
        </>
    );
}
