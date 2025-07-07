import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    document.title = "Let's Talk - Slvbio"; 
  }, []);
  return (
      <div className="p-2 bg-[#F8F6EF] text-black overflow-x-hidden h-screen">
          <Navbar color="black" isHomePage={false} />
          <div className="my-12 mt-32 h-[70vh]">
            <h1 className="uppercase text-3xl md:text-7xl w-[98%]">We provide our services worldwide. Our home is Nigeria.</h1>
            <div className="grid md:grid-cols-2  grid-cols-1 my-12">
                <div className="col-span-1 gap-y-2 flex flex-col items-start justify-start">
                    <p className="uppercase text-xs">Send an email</p>
                    <a href="mailto:Hello@slvbio.ng" className="uppercase text-3xl md:text-7xl hover:text-gray-400 transition-colors duration-300">Hello@slvbio.ng</a>
                    <p className="uppercase text-xs">Lets' talk</p>
                      <a href="+47 123 45 678" className="hover:text-gray-400 transition-colors duration-300 text-3xl md:text-7xl">+47 123 45 678</a>
                </div>
                <div className="col-span-1 flex flex-col items-start justify-start">

                  <p className="uppercase text-xs">drop by</p>
                  <p className="text-3xl md:text-7xl uppercase">Maitama Aguiyi Ironsi 38, abuja</p>
                  <div className="mt-8 flex justify-between w-[50%]">
                    <p className="uppercase text-xs">follow us</p>
                    <div className="flex flex-col gap-2 text-xs uppercase">
                      <a href="https://www.instagram.com/slvbio.ng" className="hover:text-gray-400 transition-colors duration-300">Instagram</a>
                      <a href="https://www.twitter.com/slvbio_ng" className="hover:text-gray-400 transition-colors duration-300">Twitter</a>
                      <a href="https://www.facebook.com/slvbio.ng" className="hover:text-gray-400 transition-colors duration-300 ">Facebook</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <Footer color="black" />
        </div>
  )
}

export default Contact