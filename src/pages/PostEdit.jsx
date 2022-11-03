import React from 'react';

const PostEdit = () => {
    return (
        <div>
            <div className="hero h-60 rounded-xl " style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Edit Your Post</h1>
                    </div>
                </div>
            </div>
            <form className='my-5'>
                <fieldset className='border border-blue-400 rounded my-4 flex justify-around items-center'>
                    <legend>Select Your Thumbnail</legend>
                <input disabled type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs my-2" />
                <h1 className='text-2xl font-serif font-semibold'>OR</h1>
                <div className="flex" >
                    <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-200 py-3">https://</span>
                    <input type="text" name="url" id="url" placeholder="www.image.com/file" className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 text-gray-100 bg-gray-700 px-1 focus:ring-violet-400" />
                </div>
                            </fieldset>
                <input type="text" className='bg-purple-700 py-4 px-2 rounded w-full text-white placeholder:text-gray-300 font-serif text-xl border-none focus:border-none active:border-none' name="" placeholder='! Your Awesome Title Here..' />
                <textarea name="" className='textarea textarea-info w-full min-h-[15rem] my-5 rounded text-2xl p-2 font-serif text-gray-700 placeholder:text-gray-500' placeholder='!!Enter Your Post Details Here....'></textarea>
            </form>
        </div>
    );
};

export default PostEdit;