import React from 'react';

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px]  text-white px-4 bg-[#24262b]'>
      <dir className='mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1>Need advice to improve your Cooking Skills?</h1>
            <p>SignUp to join our newsLetter and stay up to date</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input 
                className='p-3 flex w-full rounded-md text-black'
                type="email"
                placeholder='email' />
                <button className=' bg-purple-600 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>
                    Notify Me
                </button>
            </div>

        </div>
      </dir>
    </div>
  );
}

export default NewsLetter;
