import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video1 from "../assets/253998_medium.mp4";
import video2 from "../assets/278750_tiny.mp4";
import video3 from "../assets/284566_tiny.mp4";
import video4 from "../assets/253998_medium.mp4";
import video5 from "../assets/284566_tiny.mp4";

const Work = () => {
  const contentData = [
    {
      id: 1,
      title: "Happy Energy",
      subtitle: "[Harnessing positivity]",
      video: video1,
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "Mindful Living",
      subtitle: "[Embracing consciousness]",
      video: video2,
      date: "2023-10-02",
    },
    {
      id: 3,
      title: "Wellness Journey",
      subtitle: "[Nurturing body & soul]",
      video: video3,
      date: "2023-10-03",
    },
    {
      id: 4,
      title: "Inner Peace",
      subtitle: "[Finding balance within]",
      video: video4,
      date: "2023-10-04", 
    },
    {
      id: 5,
      title: "Natural Harmony",
      subtitle: "[Connecting with earth]",
      video: video5,
      date: "2023-10-05",
    },
    {
      id: 6,
      title: "Pure Inspiration",
      subtitle: "[Awakening creativity]",
      video: video2,
      date: "2023-10-06",
    },
  ];

  const [viewMode, setViewMode] = useState("grid"); 
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});


  useEffect(() => {
    document.title = "Work - Slvbio";
  }, []);

  useEffect(() => {
    contentData.forEach((item) => {
      const video = document.createElement("video");
      video.src = item.video;
      video.preload = "auto";
    });
  }, []);

  const handleMouseEnter = (id:number) => {
    if (videoRefs.current[id] ) {
      videoRefs.current[id].play().catch(() => {});
    }
  };

  const handleMouseLeave = (id:number) => {
    if (videoRefs.current[id] ) {
      videoRefs.current[id].pause();
    }
  };

  return (
    <div className="p-2 bg-[#F8F6EF] text-black overflow-x-hidden">
      <Navbar color="black" isHomePage={false} />
      <div className="my-12 mt-32">
        <h1 className="uppercase text-3xl md:text-7xl w-[98%]">
          Every story should captivate the right audience just right.
        </h1>
        <div className="flex w-full justify-between text-xs uppercase mt-4">
          <p>Projects</p>
          <div className="flex gap-4 uppercase">
            <button
              onClick={() => setViewMode("grid")}
              className={viewMode === "list" ? "text-gray-300 uppercase" : "uppercase"}
            >
              [Grid]
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={viewMode === "grid" ? "text-gray-300 uppercase" : "uppercase"}
            >
              [List]
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
           <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mb-12 gap-x-4 gap-y-12">
          {contentData.map((member) => (
            <div
              key={member.id}
              className="text-xs uppercase flex flex-col items-start group"
              onMouseEnter={() => handleMouseEnter(member.id)}
              onMouseLeave={() => handleMouseLeave(member.id)}
            >
              <div className="relative aspect-[16/9] w-full">
                <div
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100 " 
                 `}
                >
                    <video
                    ref={(el) => { videoRefs.current[member.id] = el; }}
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    className="w-full h-full object-cover object-center bg-black transition-opacity duration-300"
                  >
                    <source type="video/mp4" src={member.video} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="flex w-[70%] justify-between mt-2">
                <div>
                  <p>{member.title}</p>
                  <p className="text-gray-300">{member.subtitle}</p>
                </div>
                <p>{member.date}</p>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div className="mb-12 space-y-6">
            {contentData.map((item) => (
            <div
                key={item.id}
                className=" relative text-xs uppercase cursor-pointer group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div className="">
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.subtitle}</p>
                  <p className="text-sm">{item.date}</p>
                </div>
                <div className="absolute bottom-0 left-50 w-1/3 aspect-[16/9]">
                  <video
                    ref={el => { videoRefs.current[item.id] = el; }}
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    className="w-full h-full object-cover object-center bg-black hidden group-hover:flex transition-opacity duration-300"
                  >
                    <source type="video/mp4" src={item.video} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer color="black" />
    </div>
  );
};

export default Work;