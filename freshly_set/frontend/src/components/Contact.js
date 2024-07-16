import React from 'react'
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

function Contact() {
    return (
      <div className="flex w-[100] ">
        <div className="mt-[132px] ml-[40px] block space-y-[29px]">
          <div className="flex space-x-[256px]">
            <div classsName="block">
              <IoMdMail className="h-[49px] w-[45px]" />
              <p className="font-[720] text-[72] -mt-[5px] font-inter">Email</p>
              <p className="font-[22] text-[400] text-[#525560] font-josephin -mt-[10px]">
                info@freshlyfarms
              </p>
            </div>

            <div classsName="block">
              <FaPhoneAlt className="h-[49px] w-[45px]" />
              <p className="font-[720] text-[72] -mt-[5px] font-inter">Phone</p>
              <p className="font-[22] text-[400] text-[#525560] font-josephin -mt-[10px]">
                +254 701 234 567
              </p>
            </div>
          </div>
          <div className="flex space-x-[256px]">
            <div classsName="block">
              <FaLocationDot className="h-[49px] w-[45px]" />
              <p className="font-[720] text-[72] -mt-[5px] font-inter">
                Office
              </p>
              <p className="font-[22] text-[400] text-[#525560] font-josephin -mt-[10px]">
                Nairobi, Kenya
              </p>
            </div>

            <div classsName="block">
              <IoIosGlobe className="h-[49px] w-[45px]" />
              <p className="font-[720] text-[72] -mt-[5px] font-inter">
                Socials
              </p>
              <div className="flex items-center space-x-[5px] ">
                <FaSquareInstagram className="h-[37px]  w-[32px]" />
                <FaFacebook className="h-[37px]  w-[32px]" />
                <AiFillTwitterCircle className="h-[37px]  w-[32px]" />
                <FaTiktok className="h-[37px]  w-[32px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="block mt-[94px] mr-[84px] ml-[140px]">
          <p className="text-[22px] text-black font-[700]">Email</p>
          <input
            placeholder="john@gmail.com"
            className="w-[474px] h-[46px] py-[10px] px-[14px] rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none"
          />
          <p className="font-inter text-[16px] font-[500] text-[#333F51]">
            Message
          </p>
          <textarea
            className='h-[220px] w-[474px]  rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none'
            placeholder="Your message..."
          />
        </div>
      </div>
    );
}

export default Contact