import { Link } from "react-router-dom";

const Footer = ({ color }: { color: string }) => {
  return (
    <div className={`grid grid-cols-12 gap-4 text-${color} items-center  w-[98%]  overflow-hidden`}>
      <div className="md:col-span-2 col-span-3 flex items-center"></div>
      <ul className="md:col-span-5 col-span-9 flex justify-between items-end uppercase">
        <Link to="/" className="hover:text-gray-400 transition-colors duration-300 hidden md:flex">
          <li className="text-[5px] md:text-xs">Slvbio<span className="text-[5px] md:text-xs align-super">®</span></li>
        </Link>
          <a href="mailto:Hello@slvbio.ng" className="hover:text-gray-400 transition-colors duration-300">Hello@slvbio.ng</a>
         <a href="+47 123 45 678" className="hover:text-gray-400 transition-colors duration-300">+47 123 45 678</a>
      </ul>
      <div className="md:col-span-5 hidden md:flex text-[5px] md:text-xs items-end justify-end">
        <p>ENG</p>
      </div>
    </div>
  );
};

export default Footer;