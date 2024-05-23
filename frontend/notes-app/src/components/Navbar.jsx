import React, { useState } from 'react'
import ProfileInfo from './Cards/ProfileInfo'
import SearchBar from './SearchBar/SearchBar'
import { useNavigate } from "react-router-dom"
 

const Navbar = ({ userInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const SignOut = () => {
    localStorage.clear()
    navigate("/signin")
  }

  const handleSearch = () => {

  };

  const onClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo  userInfo={userInfo} SignOut={SignOut}/>
    </div>
  )
}

export default Navbar
