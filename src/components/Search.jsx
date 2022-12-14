import React,{useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Search = ({searchName,name}) => {
  const [search,setSearch] = useState(false)
  const onChange = () => {
    setSearch(true)
  }
  return (
    

    <form className='flex w-44 justify-end items-center z-50'>
    <input className={`h-8 border-none w-40 rounded-l-2xl my-1 bg-white/5`} type="text" value={name} onChange={searchName} />
    <AiOutlineSearch className='text-white'/>
  </form>


  )
}

export default Search
