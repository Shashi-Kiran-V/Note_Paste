import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
  const pastes=useSelector((state)=>state.paste.pastes);
  console.log(pastes);
  const dispatch=useDispatch();
  const [searchTerm,setSearchTerm]=useState('');
  const filterData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  
  return (
    <div>
      <input 
      className='p-2 rounded-2xl min-w-[600px] mt-5'
      type='search'
      placeholder='search here'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      
      />
      <div className='flex flex-col gap-5'>
        {
          filterData.length>0 && 
          filterData.map((paste)=>{
              return (

                <div>
                  {paste.title}
                  </div>
              )


          })
        }

      </div>

    </div>
  )
}

export default Paste
