import { useState, useEffect } from "react";
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

interface NavbarProps {
    color: string;
    isHomePage: boolean;
}

const Navbar = ({ color, isHomePage }: NavbarProps) => {
  const newDate = () =>
    new Date().toLocaleTimeString("en-GB", { hour12: false });

  const [currentTime, setCurrentTime] = useState(newDate()); 

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(newDate());
    }, 1000); // Update every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
    return (
        <div className="absolute top-0 left-0 w-full fixed z-50 ">
            {isHomePage && (
                <div className="md:col-span-2 col-span-3 flex items-center justify-center absolute h-screen text-white">
                    <Link to="/" className="text-3xl">Slvbio<span className="text-xs align-super">®</span></Link>
                </div>
            )}
            <div className={`grid grid-cols-12 gap-4 text-${color} items-center `}>
            
                    <div className="md:col-span-2 col-span-3 flex items-center">
                            {!isHomePage && (
                        <Link to="/" className="text-3xl">Slvbio<span className="text-xs align-super">®</span></Link>
                           )}
                    </div>
             
                <ul className="md:col-span-5 col-span-9 flex justify-between items-center uppercase">
                    <Link to="/work" className="hover:text-gray-400 transition-colors duration-300">
                        <li className="text-xs">Work</li>
                    </Link>
                    <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">
                        <li className="text-xs">About</li>
                    </Link>
                    <Link to="/contact" className="hover:text-gray-400 transition-colors duration-300">
                        <li className="text-xs">Let's talk</li>
                    </Link>
                </ul>
                <div className="md:col-span-5 text-xs md:flex items-center justify-end hidden">
                    <p>{currentTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;