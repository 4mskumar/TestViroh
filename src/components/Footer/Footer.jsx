import React from "react";
import { serviceTitle } from "../../data/servicesData";

const Footer = () => {
  return (
    <div className="w-full flex items-center px-72 h-[50vh] relative">
      <div className="w-full h-full z-[-1] bg-black/90 absolute top-0 left-0">
        <img
          className="w-full h-full  opacity-20 object-cover "
          src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="flex items-center gap-48 mx-auto">
        <div className="z-[1000] w-full flex flex-col gap-4" style={{ zIndex: 40 }}>
          <img src="public/images/logowotext.png" className="w-28" alt="" />
          <p className="text-xl font-inter tracking-tighter text-white font-semibold">
            Let's tap and manifest our unlimited potential.
          </p>
          <div className="text-lg font-inter flex gap-10 text-white tracking-tighter font-bold">
            <a href="https://www.facebook.com/viroh.development " target="blank" className="cursor-pointer text-2xl hover:text-zinc-500 duration-300 transition-all">fc</a>
            <a href="https://instagram.com/viroh_development?igshid=754j54qxgr7a " target="blank" className="cursor-pointer text-2xl hover:text-zinc-500 duration-300 transition-all">in</a>
          </div>
        </div>
        <div>
          <h1 className="font-dm text-white text-4xl tracking-tighter">
            Important Links
          </h1>
          <div className="flex flex-col gap-2 mt-5">
            {serviceTitle.map((val, ind) => (
              <p className="text-white cursor-pointer hover:text-mustard duration-300 transition-all font-inter tracking-tighter">
                {val.title}
              </p>
            ))}
          </div>
        </div>
        <div className="w-1/3 ">
          <h1 className="font-dm text-white text-4xl tracking-tighter">
            Contact Us
          </h1>
          <div className="flex flex-col gap-3 mt-5">
              <p className="cursor-pointer hover:text-mustard duration-300 transition-all text-white font-inter tracking-tighter">
              VIROH: A place for overall development 
              A-7, first floor, Prabhat Apartments, near HDFC Bank Devli Road, Khanpur, New Delhi-110062 
              </p>

                <div className="cursor-pointer hover:text-mustard duration-300 transition-all text-white font-inter tracking-tighter">
                    <p className="text-lf font-semibold">Contact:</p>
                    <p>8377080643 <br></br>
                    8802074320</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
