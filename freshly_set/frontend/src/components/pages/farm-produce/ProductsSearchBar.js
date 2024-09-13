import React from 'react'
import { MdSearch } from 'react-icons/md'

function ProductsSearchBar({ placeholder }) {

  const handleSearch = () => {

  }
  return (
    <form  className="absolute translate-x-[25%] mt-[100px] z-20 h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <div className="flex justify-between items-center   w-[853.653px] font-[600] h-[79px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        
        <input
          type="text"
          // value={query}
          // onChange={(e) => setQuery(e.target.value) }
          className="px-4 text-[15px] lg:text-[28px] text-black/[50%] font-inter font-semibold border-none outline-none my-[20px] w-[217px] lg:w-auto"
          placeholder="Search For News, Media etc..."
          // defaultValue={getSearchParams()}
        />
        
          <MdSearch  className="text-[58px] freshlyGreenText" />
      </div>
     
     
    </form>
)
}

export default ProductsSearchBar