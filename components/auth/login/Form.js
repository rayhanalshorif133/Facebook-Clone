import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Form() {

  const [userName, setUserName] = useState('rayhanalshorif@gmail.com');

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handleGoogleSignIn = (e) => {
    const URL = prosess.env.NEXTAUTH_URL || 'http://localhost:3000';
    signIn('google', { callbackUrl: URL });
  };

  return (
    <>
      <div className="bg-white p-5 xl:p-4 shadow-lg rounded-2xl">
        <form className="flex flex-col items-center justify-center">
          <input type="text" placeholder="Email address or phone number"
            className="w-[400px] xl:w-[350px] h-[50px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B74E4] focus:border-transparent" onChange={handleUserName} />
          <input type="password" placeholder="Password" className="w-[400px] xl:w-[350px]  h-[50px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B74E4] focus:border-transparent mt-4" />
          <button type="button" className="w-[400px] xl:w-[350px] h-[47px] bg-[#1B74E4] text-white font-bold text-[1.2rem] rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-[#1B74E4] focus:border-transparent">Log In</button>
          <a href="#" className="text-[#5592e1] text-[1rem] font-bold mt-4 hover:underline">Forgotten password?</a>
          <hr className="w-[400px] xl:w-[350px] mt-4" />
          <button type="button" className="w-[250px] h-[47px] bg-[#42B72A] text-white font-bold text-[1.1rem] rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent">Create New Account</button>
          <button onClick={() => handleGoogleSignIn()} type="button" className="group hover:group-first:bg-white w-[250px] h-[47px] hover:bg-[#1B74E4] hover:text-white font-bold text-[1.1rem] rounded-lg mt-4  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#1B74E4]  border py-3.5 border-[#1B74E4] flex items-center hover:bg-">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" className='m-[3px] p-[10px] group group-hover:bg-white' alt="google" />
            <p className="text-base font-medium ml-4 text-gray-700  hover:text-white group group-hover:text-white">Continue with Google</p>
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-[1rem]"><span className="font-bold cursor-pointer hover:underline">Create a Page</span> for a celebrity, band or business.</p>
      </div>
    </>
  )
}