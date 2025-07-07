import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lenis from "lenis";

// Mock video imports - replace these with your actual video files
import video1 from "../assets/253998_medium.mp4";
import video2 from "../assets/278750_tiny.mp4";
import video3 from "../assets/284566_tiny.mp4";
import video4 from "../assets/253998_medium.mp4";
import video5 from "../assets/284566_tiny.mp4";
import video6 from "../assets/253998_medium.mp4";

const Home = () => {
  // Mock data array with different content and videos
  const contentData = [
    {
      id: 1,
      title: "Happy Energy",
      subtitle: "[Harnessing positivity]",
      video: video1
    },
    {
      id: 2,
      title: "Mindful Living",
      subtitle: "[Embracing consciousness]",
      video: video2
    },
    {
      id: 3,
      title: "Wellness Journey",
      subtitle: "[Nurturing body & soul]",
      video: video3
    },
    {
      id: 4,
      title: "Inner Peace",
      subtitle: "[Finding balance within]",
      video: video4
    },
    {
      id: 5,
      title: "Natural Harmony",
      subtitle: "[Connecting with earth]",
      video: video5
    },
    {
      id: 6,
      title: "Pure Inspiration",
      subtitle: "[Awakening creativity]",
      video: video6
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(video1);
  const [nextVideo, setNextVideo] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

useEffect(() => {
  document.title = "Home - Slvbio"; 
}, []);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Preload videos to prevent loading delays
  useEffect(() => {
    contentData.forEach((item) => {
      const video = document.createElement("video");
      video.src = item.video;
      video.preload = "auto";
    });
  }, []);

  interface ContentItem {
    id: number;
    title: string;
    subtitle: string;
    video: string;
  }

  const handleMouseEnter = (item: ContentItem): void => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setHoveredItem(item.id);
    
    hoverTimeoutRef.current = setTimeout(() => {
      if (nextVideoRef.current) {
        nextVideoRef.current.play().catch(() => {});
      }
      setIsTransitioning(true);
      setNextVideo(item.video);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setHoveredItem(null);
    
    hoverTimeoutRef.current = setTimeout(() => {
      if (nextVideoRef.current) {
        nextVideoRef.current.play().catch(() => {});
      }
      setIsTransitioning(true);
      setNextVideo(video1);
    }, 200);
  };

  // Handle video transition completion
  const handleVideoTransitionEnd = () => {
    if (nextVideo) {
      setCurrentVideo(nextVideo);
      setNextVideo(null);
      setIsTransitioning(false);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="h-screen  relative"> {/* Fallback background and relative for footer */}
    
      <div className="relative w-full h-screen overflow-hidden">
        {/* Current Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          src={currentVideo}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 -z-10 object-cover transition-opacity duration-700 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Next Video Background (for transition) */}
        {nextVideo && (
          <video
            ref={nextVideoRef}
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            src={nextVideo}
            className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 -z-5 object-cover transition-opacity duration-700 ease-in-out ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
            onTransitionEnd={handleVideoTransitionEnd}
          >
            <source src={nextVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        <div className="relative z-10 h-screen">
          <Navbar color="white" isHomePage={true} />
          <div className="grid grid-cols-12 gap-4 text-white items-center justify-center h-[96vh]">
            <div className="md:col-span-2 col-span-3"></div>
            <div className="md:col-span-5 col-span-9 flex flex-col gap-12">
              {contentData.map((item) => (
                <div
                  key={item.id}
                  className={`uppercase cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    hoveredItem === item.id 
                      ? 'text-opacity-100 text-white' 
                      : 'text-opacity-40 text-white hover:text-opacity-70'
                  }`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="text-xs text-white/50">{item.title}</p>
                  <p className="text-xs text-white/50">{item.subtitle}</p>
                  {hoveredItem === item.id && (
                    <p className="text-xs -mt-2 ml-2 text-white opacity-80 transition-opacity duration-200">
                      [View All]
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="md:col-span-5 hidden md:flex">
              <p className="md:w-[50%] ml-4 text-3xl ">
                Inspired narratives from the grounds up
              </p>
            </div>
          </div>
          <Footer color="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;