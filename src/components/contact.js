import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <div className='pt-10 pb-10 w-full flex items-center justify-center rounded-md bg-gradient-to-b from-violet-300 to-indigo-500'>
            <div className='max-w-3xl flex flex-col text-center'>
                <h2 className='mb-5 text-white text-3xl font-semibold'>About me</h2>
                <p className='px-10 text-white'>My name is Mith, The font-end developer is one of perfect path that match my attention I know I love challenge my ability for changing beautiful design to responsive, interactive and flexible website for users. It’s such amazing to be a mediator that I would able to connecting thing from between static design and back-end together. I’m also into full-stack developer I hope I can learn more things near the future, It’ll be more advance for my ability to be able to develop both side even font-end and back-end.</p>
            </div>
        </div>
        <div className='w-full my-20'>
            <form className='mx-auto flex flex-col max-w-xl'>
                <h2 className='mb-8 text-3xl font-semibold text-white underline underline-offset-4 decoration-4 decoration-red-300'>Contact me</h2>
                <label className='mb-2 text-white' htmlFor="name">Name</label>
                <InputName />
                <label className='mb-2 text-white' htmlFor="email">Email</label>
                <InputEmail />
                <label className='mb-2 text-white' htmlFor="text">Message</label>
                <TextArea />
                <button className='p-2 text-2xl font-semibold bg-sky-500 text-white shadow-md hover:bg-blue-400 hover:text-gray-500'>Send</button>
            </form>
        </div>        
    </div>
  )
}

function InputName() {
    return(
        <input 
            type="text" placeholder='Your name...'
            className='mb-3 px-3 py-1 outline-none text-xl rounded-md bg-gray-200 text-black focus:bg-white'
        />
    )
}

function InputEmail() {
    return(
        <input 
            type="text" placeholder='Your email...'
            className='mb-3 px-3 py-1 outline-none text-xl rounded-md bg-gray-200 text-black focus:bg-white'
        />
    )
}

function TextArea() {
    return(
        <textarea name="comment" id="comment" cols="30" rows="7" placeholder='Your message...'
            className='mb-5 px-3 py-1 outline-none text-xl rounded-md bg-gray-200 text-black focus:bg-white'
        ></textarea>
    )
}


export default Contact