import React from 'react'
import {ImSpinner8} from 'react-icons/im';
import { smallDevicePostModalContext } from '../InputBox';


export default function Index() {

    const { isPosting } = React.useContext(smallDevicePostModalContext);

    return (
        <>
            {
                isPosting === true && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#0E0E0E] bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="p-10">
                                    <div className="flex items-center justify-center">
                                        <ImSpinner8 className="animate-spin text-white h-8 w-8" />
                                    </div>
                                    <h2 className="flex mt-3 py-1 ml-2 text-lg font-semibold text-gray-200 h-2 w-auto items-center justify-center">Posting ...</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}