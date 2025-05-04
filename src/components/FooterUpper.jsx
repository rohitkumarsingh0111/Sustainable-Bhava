import React from 'react'

const FooterUpper = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col md:flex md:flex-row md:mx-28 my-2 shadow-2xl rounded-xl">
                    <div className="basis-2/3 flex flex-col justify-start items-start my-2 order-2 md:order-1 pt-2">
                        <div className="md:text-2xl text-xl md:mr-24 mx-4 pt-4">
                            <div className="text-3xl pb-2 font-bold">Download Exclusive Story Books</div>
                            <span className="text-xl">
                                Sign up now to receive our exclusive Storybook Bundle on Sustainable Development Goals (SDGs) – a collection of inspiring tales and practical insights that empower you to take action for a better future!
                            </span>
                            <div className="mt-2">
                                <button className="bg-yellow-500 text-black rounded-full py-2 px-4" style={{ width: '350px' }}>
                                    Download App
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 flex justify-center items-center my-2 order-1 md:order-2 hidden md:block py-4">
                        <div className="mb-2 mt-4 border-gray-300 md:hover:scale-105 duration-300">
                            <div className="border border-black m-2 rounded-full px-4 hover:border hover:border-yellow-500 hover:border-2 hover:scale-105 duration-300">
                                <input className="w-full focus:border-blue-500 focus:outline-none p-4 rounded-full" type="email" name="email_input" id="email_input" placeholder="Enter Your Email to Subscribe !!" />
                            </div>
                            <div className="m-2 text-center bg-[#ffb600] p-4 md:text-2xl md:bold text-xl bold hover:scale-105 duration-300">
                                <button className="px-6 py-2">Sign Up to Receive</button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 flex justify-center items-center my-2 order-2 md:order-2 md:hidden py-4">
                        <div className="mb-2 mt-4 border-gray-300 md:hover:scale-105 duration-300">
                            <div className="border border-black m-2 rounded-full px-4 hover:border hover:border-yellow-500 hover:border-2 hover:scale-105 duration-300">
                                <input className="w-full focus:border-blue-500 focus:outline-none p-4 rounded-full" type="email" name="email_input" id="email_input" placeholder="Enter Your Email to Subscribe !!" />
                            </div>
                            <div className="m-2 text-center bg-[#ffb600] p-4 md:text-2xl md:bold text-xl bold hover:scale-105 duration-300">
                                <button className="px-6 py-2">Sign Up to Receive</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterUpper;
