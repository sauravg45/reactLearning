import React from 'react';
import Search from './Search';

const SearchBar = () => {
  function onCallBack() {
    console.log("onCalBack=>");
  }

  const myStyle = {
    "display": "flex",
    "height": "300px",
    "justify-content": "center",
    "align-items": "center",
  };

  console.log("from searchbar")
  return (
    <div class="flex-container" style={myStyle}>
      <Search callBacks={onCallBack} />
    </div>
  )
}

export default SearchBar;