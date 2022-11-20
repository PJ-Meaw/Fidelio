import NavbarAdmin from "../components/NavbarAdmin"
import React from 'react'
import headphone from '../public/headphone.png'
import guitar from '../public/guitar.png'
import pic_import from '../public/import.svg'
import { useState } from "react"

export default function Import() {
   const [confirm, setConfirm] = useState(0);

   async function handleSubmit(e) {
      e.preventDefault();

      const body = {
         Link: e.currentTarget.link.value,
         Songname: e.currentTarget.songname.value,
         Artist: e.currentTarget.artist.value,
         Role: "Admin"
      };

      const res = await fetch('http://127.0.0.1:3000/reciever', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body)
      });

      const res2 = await res.json();
      console.log(res2);

      alert(res2.message)
      window.location = '/import';
   } 

   return (
      <>
         <div className="w-full h-screen bg-black ">
            <div className=" max-w-screen-xl mx-auto w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(/bg-import.png)` }}>
               <NavbarAdmin />
               <div className="flex flex-row items-center h-full ">
                  <div className="w-full relative">
                     <div className="absolute top-[97px] left-[0px]">
                        <img src={guitar.src} alt="" className=" w-[347px] h-[649px] leading-[110px]" />
                     </div>
                     <div className="pl-[252px] pt-[174px] relative">
                        <span className=" font-League_Spartan text-[#FFFFFF] text-[120px] font-black">IMPORT S </span>
                        <span className=" font-League_Spartan text-[#FFFFFF] text-[120px] font-black ml-[58px]">NG</span>
                        <div className="absolute top-[190px] left-[771.4px]">
                           <img src={headphone.src} alt="" className=" w-[127px] h-[115px] leading-[110px]" />
                        </div>
                     </div>
                     <form id="import-form" action="/import" onSubmit={handleSubmit}>
                     <div className="flex flex-col w-full h-full items-start pt-[72px] pl-[377px]">
                        {/* enter link */}
                        <div className='flex flex-col items-start gap-[4px] mb-[47px] '>
                           <input type="text" id="link" name="link" className="bg-[#2C2E47]  w-[721px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your link here!!" required />
                        </div>
                        {/* enter song,artist */}
                        <div className='flex flex-row gap-[65px] mb-[63px] '>
                           <div className='flex flex-col items-start'>
                              <input type="text" id="songname" name="songname" className="bg-[#2C2E47] w-[328px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Song name" required />
                           </div>
                           <div className='flex flex-col items-start'>
                              <input type="text" id="artist" name="artist" className="bg-[#2C2E47] w-[328px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Artist" required />
                           </div>
                        </div>
                        <button type="upload" className="ml-[231px] w-[265px] h-[68px] rounded-[50px] text-[24px] text-[#FFFFFF] font-medium font-League_Spartan bg-gradient-to-r from-[#F68FF2] via-[#A35AAD] to-[#1565D8] focus:ring focus:ring-[#5D37AC] " >Upload</button>
                     </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div className={`${confirm ? "block" : "hidden"}`}>
            <div className="fixed top-0 left-0 w-full h-screen z-20 flex flex-row justify-center items-center" style={{ background: 'rgba(74, 80, 92, 0.4)' }}>
               <div className="w-[545px] h-[249px] rounded-[10px] bg-[#E6E1FD] flex flex-col items-center justify-center">
                  <img src={pic_import.src} alt="Logout" className="w-[88px] h-[88px] mb-[7px]" />
                  <p className="text-[#000000] font-League_Spartan text-[36px] leading-[33px] font-bold mb-[13px]">Importing song</p>
                  <p className="text-[#000000] font-League_Spartan text-[20px] leading-[18px] font-light mb-[18px]">Are you insisting on importing this song?</p>
                  <div className="flex flex-row gap-[14px]">
                     <button className="bg-gradient-to-r from-[#F68FF2] via-[#A35AAD] to-[#1565D8] w-[70px] h-[28px] rounded-[50px] text-[#FFFFFF] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]" onClick={handleSubmit}>YES</button>
                     <button className="bg-[#FFFFFF] w-[70px] h-[28px] rounded-[50px] border-[0.5px] border-[#7981CF] text-[#7C64DC] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]" onClick={() => {setConfirm(0)}}>NO</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}