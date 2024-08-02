import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogSearch() {
  const [query, setQuery] = useState('');
// Uses useEffect hook and axios to call from backend 
  useEffect(() => {
    axios.get('/freshlyapp/blogs')
      .then(response => {
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    axios.get(`/freshlyapp/search?q=${query}`)
      .then(response => {
        setFilteredBlogs(response.data);
      })
      .catch(error => console.error('Error searching blogs:', error));
    console.log(`Searching for ${query}`);
    //  search 
  };

  return (
    <div className="relative  my-[30px] h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <div className="flex justify-between items-center pt-[12px] pr-[32px] w-[853.653px] font-[600] h-[100px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white  border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        <input
          type="text"
          className="px-4 text-[30px] text-black/[50%] font-inter font-semibold border-none outline-none mx-[30px] my-[20px]"
          placeholder="Search For News, Media etc..."
          value={query}
          onChange={handleInputChange}
        />
        <div>
          <img className="h-[88px] w-[89px]" src="/static/media/searchIcon.png"/>
        </div>
      </div>
    </div>
  );
}

export default BlogSearch;