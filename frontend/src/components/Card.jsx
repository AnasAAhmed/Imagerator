import React from 'react'
import { download } from "../assets";
import { DownLoadimage } from '../utils';


const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-xl" />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-sm font-bold uppercase">{name[0]}
            </div>
            <p className="text-white text-sm ">{name}</p>
          </div>
          <button 
          type='button' 
          className='outline-none bg-transparent border-none'
          onClick={()=>DownLoadimage(_id,photo)}
          ><img src={download} alt="download" className="w-6 h-6 object-contain invert" /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
