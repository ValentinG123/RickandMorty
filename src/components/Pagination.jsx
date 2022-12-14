import React from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const Pagination = ({nextPage,backPage,page,pagination,personajes,maximo}) => {
  return (

<nav className='text-center z-50'>
<p className='text-white font-serif font-semibold italic'>Pagination:{pagination}/{personajes.info.pages}</p>
  <p className='text-white font-serif font-semibold italic'>Sheet:{page}/{Math.round(maximo)}</p>
<div className='flex w-48 justify-evenly py-3'>
<button href="#" onClick={backPage} className="text-[25px] text-white" disabled={page === 1 && pagination === 1}>
<BsFillArrowLeftCircleFill/>
</button>

 

<button href="#" onClick={nextPage} className="text-[25px] text-white" disabled={pagination === personajes.info.pages && page === Math.round(maximo)}>
<BsFillArrowRightCircleFill/>
</button>
</div>
</nav>
  )
}

export default Pagination
