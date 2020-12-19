import React from 'react';
import Search from './Search'
const SearchBar = () => {
  const onCallBack = (value) => {
    console.log("onCalBack=>", value);
  }
  console.log("from searchbar")
  return (

    <div>
      <Search callBack={(value) => onCallBack(value)} />
    </div>
  )
}

export default SearchBar;