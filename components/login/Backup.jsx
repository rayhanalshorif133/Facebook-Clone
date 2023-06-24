import userController from '@/controllers/UserController'
import Image from 'next/image'
export default function Backup() {
 return (
  <div>
   <div className='grid place-items-center mt-10'>
    <img src="/assets/icons/facebook_logo_icon.ico" alt="" className="w-40" />
    <Image src="/assets/images/logos/google_logo.png" width={200} height={200} alt='Facebook logo' />
    <button onClick={() => userController.handleGoogleSignIn()}
     className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-50 mt-10">
     <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
     <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
    </button>
   </div>
  </div>
 )
}
