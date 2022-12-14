import React from "react";
import background from '../assets/background1.jpeg'

const Card = ({personajes,page,perPage}) => {
    const data = personajes.results
  return (
    <div className="">
        <img src={background} className='absolute w-screen h-screen top-0 z-10' alt=""/>
    {
      data === undefined ? <h1>'Cargando personajes'</h1> 
      : <div className="h-auto flex flex-wrap justify-center gap-2 my-5">
      {data.slice(
        (page - 1) * perPage,
        (page - 1) * perPage + perPage
      ).map((personaje,indx) => (  
        <div className="w-32 h-40 z-20 sm:w-40 sm:h-52 lg:w-52 lg:h-80" key={indx}>
        <img src={personaje.image} alt="" className="w-full h-20 rounded-t-lg sm:h-28 lg:h-40"/>
        <div className="flex flex-col justify-between items-center h-20 sm:h-28  lg:h-40 rounded-b-sm bg-gray-800">
          <h5 className="text-sm text-white lg:text-xl">{personaje.name}</h5>
          <p className="mb-1 text-[9px] text-white lg:text-[14px]" >{personaje.species}</p>
          <p className="mb-1 text-[9px] text-white lg:text-[14px]">{personaje.gender}</p>
          <p className={`mb-1 text-[9px] self-end mx-2 lg:text-[14px] ${personaje.status}`}>{personaje.status}</p>
        </div>
      </div>
   

      ))}
      </div>
    }
      

  

    </div>
  );
};

export default Card;
