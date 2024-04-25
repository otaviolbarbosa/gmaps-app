import { findByText } from '@/api/mapsApi';
import React, { FormEvent, useState } from 'react'
import { CgSearch } from "react-icons/cg";

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const handleChangeSearchString = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleSubmitSearch = async (event: KeyboardEvent<HTMLInputElement>) => {
    if(!search) return;

    if(event.code === 'Enter') {
      const result = await findByText(search);
    }
  }

  return (
    <div className='flex absolute justify-center top-4 mx-auto px-4 w-full'>
      <div className='flex gap-2 items-center bg-white px-6 py-4 border border-slate-100 rounded-full w-full max-w-[500px] drop-shadow-lg'>
        <input value={search} placeholder='Search' onChange={handleChangeSearchString} onKeyDown={handleSubmitSearch} className='w-full outline-none' />
        <CgSearch className='h-5 w-5 text-slate-400' />

      </div>
    </div>
  )
}

export default Search