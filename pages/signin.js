import img_register from '../public/img_register.png'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import cookie from 'js-cookie'
import { useState } from "react"
import notificationimg from "../public/notificationimg.png"

export default function register() {
   const cookieuser = parseCookies()
   const tok = cookieuser.token;
   const [OpenSearch,setOpenSearch] = useState(1); //for red box
   const [username , setWarningUsername] = useState(1) 
   const [password ,setWarningPassword] = useState(0)
   const [warning, setWarning] = useState(1) //for below warning
   
   if(tok) {
      history.back();
   }
  
   var error

   const inputUsername = () => {
      if (content.length == 0) {
         setOpenSearch(1);
      } else {
         setWarningUsername(0);

      {/*Get API of All*/ }

         notificationimg(1);
      }
   }
   const inputPassword = () => {
      if (content.length == 0) {
         setOpenSearch(1);
      } else {
         setWarningPassword(0);

          {/*Get API of All*/ }

         notificationimg(1);
      }
   }

   async function handleSubmit(e) {
      e.preventDefault();
      const body = {
         Username: e.currentTarget.userlogin.value,
         Password: e.currentTarget.passlogin.value
      };
      
      const res = await fetch('/api/signin', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body)
      });
      
      const res2 = await res.json();
      error = res2.error
      if (res2.error) {
         alert(res2.error);
      }
      else {
         cookie.set('token',res2.token);
         cookie.set('user',JSON.stringify(res2.user));
         //console.log(res2.user);
         alert(res2.message);
         window.location = '/home';
      } 
   }
   const showWarningall = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] '>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[10px] h-[10px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[220px] font-Commissioner font-normal text-[#DC1414]">This Username and Password are wrong. Please try another.</p>
               </div>
            </div>
         </>
      )
   }
   const showWarningpassword = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] '>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[10px] h-[10px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[220px] font-Commissioner font-normal text-[#DC1414]">This Username is wrong. Please try another.</p>
               </div>
            </div>
         </>
      )
   }
   const showWarningusername = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] '>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[10px] h-[10px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[220px] font-Commissioner font-normal text-[#DC1414]">This Password is wrong. Please try another.</p>
               </div>
            </div>
         </>
      )
   }

   return (
      <>
         <div className="bg-[#2D106A] w-full h-screen">
            <div className="mx-auto xl:container">
               <div className="flex flex-row justify-center h-screen items-center ">
                  <div className="flex flex-row w-[1026px] h-[639px]">
                     <div className="basis-[54.67%] bg-[#8957F8] rounded-l-[10px]">
                        <div style={{ backgroundImage: `url(/img_register.png)` }} className="bg-cover w-full h-full">
                           <div className='flex flex-col justify-end px-[30px] pb-[40px] w-full h-full'>
                              <div className="text-[65px] font-Commissioner font-bold text-[#FFFFFF]">FIDELIO{error}</div>
                              <p className="text-[15px] font-Commissioner font-semibold text-[#FFFFFF]">A web app that enhances the listening experience of the deaf people.</p>
                           </div>
                        </div>
                     </div>
                     <div className="basis-[45.33%] bg-[#040926] rounded-r-[10px]">
                     <form id="login-form" onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full h-full items-center pt-[80px]">
                           <div className='text-[55px] font-League_Spartan font-bold text-[#FFFFFF] mb-[18px]'>Sign in</div>
                           <div className='font-Commissioner font-normal text-[#FFFFFF] mb-[40px]'>Welcome ! Let's log in before to the website.</div>
                           <div className='flex flex-col items-start gap-[8px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Username</label>
                             
                               {/*<label htmlFor="" className={`${openSearch ? " text-[#FA3939] " : " text-[#FFFFFF] " } font-Commissioner text-[14px] font-normal  ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500 `}>Username</label>*/}
                           
                              
                              {/*<input type="text" id="userlogin" name="userlogin" className="bg-[#2C2E47]  w-[343px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" required />*/}
                             
                              <input type="text" id="userlogin" name="userlogin" className={`${username? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[343px] h-[56px]  border  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `} placeholder="Enter your username" required />                              
                              
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>
                           <div className='flex flex-col items-start gap-[8px] mb-[51px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                             {/*} <input type="password" id="passlogin" name="passlogin" className="bg-[#2C2E47]  w-[343px] h-[56px]  border border-[#FA3939] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your Password" required />*/}

                              <input type="password" id="passlogin" name="passlogin" className={`${password ? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[343px] h-[56px]  border rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `}  placeholder="Enter your Password" required />

                             
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>

                           <div className={`${warning ? "hidden" : "" } `}>
                              {showWarningall ()}
                           </div>
                           <div className={`${username  ? "hidden" : "" } `}>
                              {showWarningusername ()}
                           </div><div className={`${password ? "hidden" : "" } `}>
                              {showWarningpassword ()}
                           </div>

                           <button type="submit" className="w-[170px] h-[41px] rounded-[50px] text-[15px] text-[#FFFFFF] font-bold font-League_Spartan bg-gradient-to-r from-[#723AE8] via-[#6763CE] to-[#7BB2E5] mb-[44px] focus:ring focus:ring-[#5D37AC]" >Login</button>
                           <div className="font-League_Spartan text-[#696F79]">I don't have an account? <Link href="/register"><span className="text-[#1565D8]"><u className=' cursor-pointer'>Register</u></span></Link>  </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
