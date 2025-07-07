import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import { useEffect } from "react";

const clients = [
  "VISTA",
  "CREATIVEHUB",
  "BRANDX",
  "MEDIAFLOW",
  "NEXUS",
  "SPARKVIBE",
];

const teamMembers = [
  {
    name: "Emma Solberg",
    role: "Creative Director",
    phone: "+47 912 34 567",
    email: "emma@slvbio.com",
    image: img1,
  },
  {
    name: "Jonas Vik",
    role: "Lead Producer",
    phone: "+47 987 65 432",
    email: "jonas@slvbio.com",
    image: img2,
  },
  {
    name: "Sofia Lund",
    role: "Brand Strategist",
    phone: "+47 876 54 321",
    email: "sofia@slvbio.com",
    image: img3,
  },
  {
    name: "Lars Berg",
    role: "Cinematographer",
    phone: "+47 765 43 210",
    email: "lars@slvbio.com",
    image: img4,
  },
  {
    name: "Maja Eriksen",
    role: "Editor",
    phone: "+47 654 32 109",
    email: "maja@slvbio.com",
    image: img5,
  },
  {
    name: "Oskar Nilsen",
    role: "Sound Designer",
    phone: "+47 543 21 098",
    email: "oskar@slvbio.com",
    image: img6,
  },
];

interface ClientListProps {
  clients: string[];
}

const ClientList = ({ clients }: ClientListProps) => (
  <div className="flex justify-between items-start w-full md:w-[50%] text-xs ">
    <div className="flex flex-col items-start gap-2">
      {clients.slice(0, Math.ceil(clients.length / 2)).map((client, index) => (
        <p key={`client1-${index}`} className="uppercase">{client}</p>
      ))}
    </div>
    <div className="flex flex-col items-start gap-2">
      {clients.slice(Math.ceil(clients.length / 2)).map((client, index) => (
        <p key={`client2-${index}`} className="uppercase">{client}</p>
      ))}
    </div>
  </div>
);

type TeamMember = {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  alt?: string;
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="text-xs uppercase flex flex-col items-start">
    <div className="relative w-full">
      <img
        width="769"
        height="768"
        src={member.image}
        className="w-full aspect-[1/1] object-cover object-center filter grayscale brightness-75"
        alt={member.alt}
        decoding="async"
        sizes="(max-width: 769px) 100vw, 769px"
      />
      <div className="absolute inset-0 bg-black/20 "></div>
    </div>
    <p className="">{member.name}</p>
    <p className="text-gray-600 ">{member.role}</p>
    <p className="mt-2 ">{member.phone}</p>
    <p >[{member.email}]</p>
  </div>
);

const About = () => {
  useEffect(() => {
    document.title = "About - Slvbio"; 
  }, []);
  return (
    <div className="p-2 bg-[#7E958D] text-black overflow-x-hidden min-h-screen">
      <Navbar color="black" isHomePage={false} />
      <div className="my-12 mt-32  ">
        <h1 className="text-3xl md:text-6xl w-full md:w-[98%] uppercase w-full">
          Crafting unforgettable stories through visionary media.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] gap-12 md:gap-24 my-16 md:my-24">
          <div className="col-span-1">
            <h1 className="uppercase text-xs  tracking-wider">What we do</h1>
          </div>
          <div className="col-span-1">
            <p className="text-lg md:text-2xl leading-relaxed">
              Slvbio creates bold commercials, immersive branded content, and dynamic media campaigns. We fuse creative vision with strategic production to deliver stories that captivate and inspire.
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="uppercase text-xs  tracking-wider">Our expertise</h1>
          </div>
          <div className="col-span-1">
            <p className="text-base md:text-lg leading-relaxed">
              Since 2016, Slvbio has mastered the art of aligning creative concepts with client goals, budgets, and audiences. From ideation to execution—casting, location scouting, and post-production—we deliver impactful media with precision and flair.
            </p>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl w-full md:w-[90%] uppercase  leading-tight mb-12 md:mb-16">
          Partnering with bold brands to create media that moves the world.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] gap-12 md:gap-24 my-16 md:my-24">
          <div className="col-span-1">
            <h1 className="uppercase text-xs  tracking-wider">Selected clients</h1>
          </div>
          <div className="col-span-1">
            <ClientList clients={clients} />
          </div>
          <div className="col-span-1">
            <h1 className="uppercase text-xs  tracking-wider">Our team</h1>
          </div>
          <div className="col-span-1 flex justify-evenly items-start w-full">
            <p className="text-2xl md:text-3xl leading-relaxed ">
              We thrive on collaboration, fueled by creativity and driven by purpose to deliver media that resonates.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-16 w-full md:w-[70%]">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={`member-${index}`} member={member} />
          ))}
        </div>
      </div>
      <Footer color="black" />
    </div>
  );
};

export default About;