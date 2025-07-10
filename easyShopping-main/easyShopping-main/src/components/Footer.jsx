import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Foot() {
  return (
    <div className="container 
    mx-auto 
    mb-5 
    mt-6">
      <footer className="bg-white 
      w-full 
      border-t-2 
      p-6">
        <div className="">
          <p className="text-sm">&copy; 2024 Parallel Shopping™</p>
          </div>
          <div className="flex 
          display 
          space-x-6 
          items-center 
          justify-center">
            <a href="https://www.facebook.com/Zara/" className="text-black-600 hover:text-black-800">
              <BsFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/" className="text-black-600 hover:text-black-800">
              <BsInstagram size={20} />
            </a>
            <a href="https://github.com/aselhobi/easyShopping" className="text-black-600 hover:text-black-800">
              <BsGithub size={20} />
            </a>
          </div>     
      </footer>
    </div>
  );
}

export default Foot;
